import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function GET() {
	try {
		const categorias = await prisma.subject.findMany();

		return json({
			categorias,
			status: 200
		});
	} catch (err) {
		return json({
			message: 'Erro ao buscar categorias',
			status: 500
		});
	}
}
