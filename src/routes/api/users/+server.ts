import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export async function GET() {
	const users = await prisma.user.findMany();
	return json(users);
}

export async function POST({ request }) {
	const { role, name, lastname, email, password, cpf, phone, address } = await request.json();

	const userValido = await prisma.user.findUnique({
		where: {
			email,
			cpf
		}
	});
	if (userValido) {
		return json({
			message: 'Usuário já existe',
			status: 400
		});
	} else {
		const createUser = await prisma.user.create({
			data: {
				role,
				name,
				lastname,
				email,
				password: await bcrypt.hash(password, 10),
				cpf,
				phone,
				address,
				userAuthToken: crypto.randomUUID()
			}
		});

		return json({
			message: `Usuário ${name} criado com sucesso!`,
			user: createUser,
			status: 201
		});
	}
}
