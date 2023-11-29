import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

// export async function GET({ params }) {
// 	const eventInscriptions = await prisma.event.findUnique({
// 		where: {
// 			id: Number(params.id)
// 		},
// 		include: {
// 			users: {
// 				include: {
// 					User: true
// 				}
// 			}
// 		}
// 	});
// 	return json(eventInscriptions);
// }

export async function GET({ params }) {
	const eventInscriptions = await prisma.event.findUnique({
		where: {
			id: Number(params.id)
		},
		include: {
			users: {
				include: {
					User: true
				}
			}
		}
	});

	return json(eventInscriptions);
}
