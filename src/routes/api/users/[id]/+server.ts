import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const user = await prisma.user.findUnique({
		where: {
			id: Number(params.id)
		}
	});
	return json(user);
}

export async function PATCH({ request, params }) {
	const { name, lastname, email, cpf, phone } = await request.json();

	const updateUser = await prisma.user.update({
		where: {
			id: Number(params.id)
		},
		data: {
			name,
			lastname,
			email,
			cpf,
			phone
		}
	});

	return json(updateUser);
}

export async function DELETE({ params }) {
	const removeUser = await prisma.user.delete({
		where: {
			id: Number(params.id)
		}
	});

	return json(removeUser);
}
