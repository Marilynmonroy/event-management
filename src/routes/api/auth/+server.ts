import prisma from '$lib/prisma';
import { Role } from '@prisma/client';
import { json, redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export async function POST({ request, cookies }) {
	const { email, password } = await request.json();
	const user = await prisma.user.findUnique({
		where: {
			email
		}
	});

	if (!user) {
		return json({ Credentials: 'Email incorrecto' });
	}

	const userPassword = await bcrypt.compare(password, user.password);

	if (!userPassword) {
		return json({ Credentials: 'Contraseña incorrecta' });
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
			message: `¡Bienvenido Administrador ${user.name}!`,
			role: 'ADMIN',
			throw: redirect(302, '/admin')
		});
	}

	return json({
		message: `¡Bienvenido ${user.name}!`,
		role: 'USER',
		throw: redirect(302, '/user')
	});
}

export async function GET({ cookies }) {
	const sessionType = cookies.get('session_USER') ? 'USER' : 'ADMIN';

	cookies.set(`session_${sessionType}`, '', {
		path: '/',
		expires: new Date(0)
	});

	return json({
		status: 200,
		body: {
			message: `Salió ${sessionType}`,
			redirect: {
				status: 302,
				location: sessionType === 'USER' ? '/user' : '/admin'
			}
		}
	});
}
