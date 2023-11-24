import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export async function GET() {
	const users = await prisma.user.findMany();
	return json(users);
}

export async function POST({ request }) {
	const { role, name, lastname, email, password, cpf, phone, address } = await request.json();

	const user = await prisma.user.findUnique({
		where: {
			email
		}
	});
	//PORTUGUES
	if (user) {
		return json('Usuario ya existe');
	}

	const createUser = await prisma.user.create({
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

	return json(createUser, { status: 201 });
}
