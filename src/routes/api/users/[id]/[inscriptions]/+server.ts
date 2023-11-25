import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const userInscriptions = await prisma.user.findUnique({
		where: {
			id: Number(params.id)
		},
		include: {
			events: true
		}
	});
	return json(userInscriptions);
}
