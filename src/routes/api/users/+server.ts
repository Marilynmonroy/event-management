import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export async function GET() {
	const users = await prisma.user.findMany();
	return json(users);
}

export async function POST({ request }) {
	const { name, lastname, email, password, cpf, phone } = await request.json();

	const userValido = await prisma.user.findUnique({
		where: {
			email,
			cpf
		}
	});

	if (!name || !lastname || !email || !password || !cpf || !phone) {
		return json({
			message: 'Todos os campos são obrigatórios',
			status: 400
		});
	} else if (userValido) {
		return json({
			message: 'Usuário já existe',
			status: 400
		});
	} else if (name || lastname || email || password || cpf || phone || !userValido) {
		const createUser = await prisma.user.create({
			data: {
				name,
				lastname,
				email,
				password: await bcrypt.hash(password, 10),
				cpf,
				phone,
				userAuthToken: crypto.randomUUID()
			}
		});

		return json({
			message: `Usuário ${name} criado com sucesso!`,
			user: createUser,
			status: 201
		});
	} else {
		return json({
			message: 'Erro ao criar usuário',
			status: 500
		});
	}
}
