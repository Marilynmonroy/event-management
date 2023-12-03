/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Actions, PageServerLoad } from './$types';
import prisma from '$lib/prisma';
export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	criarEvento: async ({ request }) => {
		const data = await request.formData();

		console.log(data);

		const title: any = data.get('tituloEvento');
		const location: any = data.get('localizacao');
		const category: any = data.get('categoria');
		const capacity: any = data.get('capacidadeMaxima');
		const dataEvent: any = data.get('diaEvento');
		const beginningEvent: any = data.get('inicioEvento');
		const endEvent: any = data.get('finalEvento');
		const description: any = data.get('descricao');
		// const image: any = data.get('imagemEvento');

		// console.log(dataEvent);

		const event = await prisma.event.create({
			data: {
				title,
				location,
				category,
				capacity: Number(capacity),
				dataEvent,
				beginningEvent,
				endEvent,
				description,
				image: 'https://rollingstone.uol.com.br/media/uploads/pulp_fiction_reproducao_video.jpg'
			}
		});
		// console.log(event);

		return {
			status: 200,
			body: {
				event
			}
		};
	}
};
