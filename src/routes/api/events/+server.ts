import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function GET() {
	const events = await prisma.event.findMany();
	return json(events);
}

export async function POST({ request }) {
	const { title, category, description, image, location, dateTime, updatedAt } =
		await request.json();

	const createdAt = new Date();

	if (
		!title ||
		!category ||
		!description ||
		!image ||
		!location ||
		!dateTime ||
		!updatedAt ||
		!createdAt
	) {
		return json({
			message: 'Todos os campos são obrigatórios',
			status: 400
		});
	}

	const createEvent = await prisma.event.create({
		data: {
			title,
			category,
			description,
			image,
			location,
			dateTime,
			createdAt,
			updatedAt
		}
	});

	if (!createEvent) {
		return json('Erro ao criar evento!');
	}

	return json(createEvent, { status: 201 });
}
