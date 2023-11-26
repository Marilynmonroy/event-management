import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function GET() {
	const events = await prisma.event.findMany();
	return json(events);
}

export async function POST({ request }) {
	const { title, category, description, location, dateTime, updatedAt } = await request.json();
	const createdAt = new Date();

	const createEvent = await prisma.event.create({
		data: {
			title,
			category,
			description,
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
