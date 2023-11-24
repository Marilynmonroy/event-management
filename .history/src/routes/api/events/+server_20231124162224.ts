import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function GET() {
	const events = await prisma.event.findMany();
	return json(events);
}

export async function POST({ request }) {
	const { title, subject, description, location, dateTime, createdAt, updatedAt } = await request.json();

	const event = await prisma.event.findUnique({
		where: {
			title
		}
	});
	
	if (event) {
		return json('Usuario ya existe');
	}

	const createEvent = await prisma.event.create({
		data: {
			title,
			subject,
			description,
			location,
			dateTime,
			createdAt,
			updatedAt
		}
	});

	return json(createEvent, { status: 201 });
}
