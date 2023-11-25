import prisma from '$lib/prisma';
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
		return json({ Credentials: true });
	}

	const userPassword = await bcrypt.compare(password, user.password);

	if (!userPassword) {
		return json({ Credentials: true });
	}

	const authenticatedUser = await prisma.user.update({
		where: {
			email: user.email
		},
		data: {
			userAuthToken: crypto.randomUUID()
		}
	});

	cookies.set('session', authenticatedUser.userAuthToken, {
		path: '/',
		httpOnly: true,
		sameSite: 'strict'
	});

	return json(`Bem-vinda ${user.name}`);
}
