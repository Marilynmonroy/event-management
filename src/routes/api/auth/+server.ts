import prisma from '$lib/prisma';
import { Role } from '@prisma/client';
import { json } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export async function POST({ request, cookies }) {
	const { email, password } = await request.json();
	const user = await prisma.user.findUnique({
		where: {
			email
		}
	});

	if (!user) {
		return json({ Credentials: 'email incorreto' });
	}

	const userPassword = await bcrypt.compare(password, user.password);

	if (!userPassword) {
		return json({ Credentials: 'senha incorreta' });
	}

	const authenticatedUser = await prisma.user.update({
		where: {
			email: user.email
		},
		data: {
			userAuthToken: crypto.randomUUID()
		}
	});

	let sessionType = 'USER';

	if (user.role === Role.ADMIN) {
		sessionType = 'ADMIN';
	}

	cookies.set(`session_${sessionType}`, authenticatedUser.userAuthToken, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict'
	});

	if (user.role === Role.ADMIN) {
		return json({
			message: `¡Bienvenido administrador ${user.name}!`,
			role: 'ADMIN'
		});
	}
	return json({
		message: `¡Bienvenido ${user.name}!`,
		role: 'USER'
	});
}
