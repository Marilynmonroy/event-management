import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export async function GET({ params }) {
	const user = await prisma.user.findUnique({
		where: {
			id: Number(params.id)
		}
	});
	return json(user);
}

export async function PATCH({ request, params }) {
	const { role, name, lastname, email, password, cpf, phone, address } = await request.json();

	const updateUser = await prisma.user.update({
		where: {
			id: Number(params.id)
		},
		data: {
			role,
			name,
			lastname,
			email,
			password: await bcrypt.hash(password, 10),
			cpf,
			phone,
			address
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
