import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
	const event = await prisma.event.findUnique({
		where: {
			id: Number(params.id)
		}
	});
	return json(event);
}

export async function PATCH({ request, params }) {
	const {
		title,
		category,
		description,
		location,
		capacity,
		dataEvent,
		beginningEvent,
		endEvent,
		image,
		status
	} = await request.json();

	const updateEvent = await prisma.event.update({
		where: {
			id: Number(params.id)
		},
		data: {
			title,
			location,
			category,
			capacity: Number(capacity),
			dataEvent,
			beginningEvent,
			endEvent,
			description,
			image,
			status
		}
	});

	return json(updateEvent);
}

export async function DELETE({ params }) {
	const removeEvent = await prisma.event.delete({
		where: {
			id: Number(params.id)
		}
	});

	return json(removeEvent);
}
