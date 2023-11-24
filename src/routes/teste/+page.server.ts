/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';
const prisma = new PrismaClient();

export const load = (async () => {
	const allUsers = await prisma.userTeste.findMany();
	return {
		status: 200,
		body: {
			allUsers
		}
	};
}) satisfies PageServerLoad;

import type { Actions } from './$types';

export const actions = {
	criarTeste: async ({ request }) => {
		const data = await request.formData();

		// Coloque em uma variavel e faça as validaçoes
		const nome: any = data.get('nomeTeste');
		const senha: any = data.get('senhaTeste');

		const user = await prisma.userTeste.create({
			data: {
				nomeDoBanco: nome,
				senhaDoBanco: senha
			}
		});
		return {
			user
			// redirect: '/teste'
		};
	}
} satisfies Actions;
