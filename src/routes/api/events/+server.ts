import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function GET() {
	const events = await prisma.event.findMany();
	return json(events);
}

export async function POST({ request }) {
	const {
		title,
		category,
		description,
		image,
		capacity,
		location,
		dataEvent,
		beginningEvent,
		endEvent,
		updatedAt
	} = await request.json();
	const createdAt = new Date();

	if (
		!title ||
		!category ||
		!description ||
		!image ||
		!capacity ||
		!location ||
		!dataEvent ||
		!beginningEvent ||
		!endEvent ||
		!updatedAt ||
		!createdAt
	) {
		return json({
			message: 'Todos os campos são obrigatórios',
			status: 400
		});
	} else {
		const createEvent = await prisma.event.create({
			data: {
				title,
				category,
				description,
				image,
				capacity,
				location,
				dataEvent,
				beginningEvent,
				endEvent,
				createdAt,
				updatedAt
			}
		});

		return json(createEvent, { status: 201 });
	}
}
