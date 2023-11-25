import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

// Endpoint para ver todas las inscripciones
export async function GET() {
	const inscriptions = await prisma.inscription.findMany({
		include: {
			User: true,
			Event: true
		}
	});
	return json(inscriptions);
}

// Endpoint para crear una nueva inscripción
export async function POST({ request }) {
	const { presence, userId, eventId } = await request.json();

	const user = await prisma.user.findUnique({
		where: {
			id: userId
		}
	});

	const event = await prisma.event.findUnique({
		where: {
			id: eventId
		}
	});

	if (!user || !event) {
		//portugués
		return json('Usuario o evento no encontrado', { status: 404 });
	}

	const inscriptionExists = await prisma.inscription.findFirst({
		where: {
			userId: userId,
			eventId: eventId
		}
	});

	if (inscriptionExists) {
		//portugués
		return json('La inscripción ya existe', { status: 400 });
	}

	const createInscription = await prisma.inscription.create({
		data: {
			presence,
			status: true,
			User: {
				connect: {
					id: userId
				}
			},
			Event: {
				connect: {
					id: eventId
				}
			}
		}
	});

	return json(createInscription, { status: 201 });
}
