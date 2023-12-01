import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';
import fileType from 'file-type';

export async function GET() {
	const events = await prisma.event.findMany();
	return json(events);
}

export async function POST({ request }) {
	try {
		const {
			title,
			category,
			description,
			image: imageData,
			capacity,
			location,
			dataEvent,
			beginningEvent,
			endEvent
		} = await request.json();

		if (
			!title ||
			!category ||
			!description ||
			!imageData ||
			!capacity ||
			!location ||
			!dataEvent ||
			!beginningEvent ||
			!endEvent
		) {
			return json({ message: 'Todos os campos são obrigatórios', status: 400 });
		}

		const imageBuffer = Buffer.from(imageData, 'base64');
		const imageFileType = await fileType.fromBuffer(imageBuffer);

		if (!imageFileType || !['image/png', 'image/jpeg'].includes(imageFileType.mime)) {
			return json({ message: 'A imagem deve ser do tipo PNG ou JPEG', status: 400 });
		}

		const createEvent = await prisma.event.create({
			data: {
				title,
				category,
				description,
				image: imageBuffer.toString('base64'),
				capacity: parseInt(capacity),
				location,
				dataEvent,
				beginningEvent,
				endEvent,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		});

		return json(createEvent, { status: 201 });
	} catch (error) {
		// Lidar com erros internos
		return json({
			message: 'Ocorreu um erro ao processar a solicitação',
			error: error,
			status: 500
		});
	}
}
