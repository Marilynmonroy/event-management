import prisma from '$lib/prisma.js';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const inscription = await prisma.inscription.findUnique({
		where: {
			id: Number(params.id)
		},
		include: {
			User: true,
			Event: true
		}
	});
	return json(inscription);
}

export async function PATCH({ request, params }) {
	const { presence, status, userId } = await request.json();

	const user = await prisma.user.findUnique({
		where: {
			id: userId
		}
	});

	if (!user) {
		//portugués
		return json('Usuario o evento no encontrado', { status: 404 });
	}

	const updateInscription = await prisma.inscription.update({
		where: {
			id: Number(params.id)
		},
		data: {
			presence,
			status,
			User: {
				connect: {
					id: userId
				}
			}
		}
	});
	return json(updateInscription);
}

export async function DELETE({ params }) {
	const removeInscription = await prisma.inscription.delete({
		where: {
			id: Number(params.id)
		}
	});

	return json(removeInscription);
}
