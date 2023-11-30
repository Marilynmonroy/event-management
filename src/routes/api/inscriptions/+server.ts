import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';
import * as nodemailer from 'nodemailer';

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

	await sendEmail(createInscription.id);

	return json(createInscription, { status: 201 });
}

async function sendEmail(inscriptionId: number) {
	// Email e senha de onde será enviado (outlook)
	const email = '';
	const password = '';

	const inscription = await prisma.inscription.findUnique({
		where: { id: Number(inscriptionId) },
		include: { User: true, Event: true }
	});

	if (!inscription) {
		return null;
	}

	const emailConfig = {
		host: 'smtp.office365.com',
		port: 587,
		secure: false,
		tls: {
			rejectUnauthorized: false,
			ciphers: 'SSLv3'
		},
		auth: {
			user: email,
			pass: password
		}
	};

	const eventDate = inscription.Event.dateTime;

	const formattedDate = new Date(eventDate).toLocaleString('pt-BR', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		timeZoneName: 'short'
	});

	const html = `
		<html lang="pt-BR">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<style>
				body {
					font-family: Arial, sans-serif;
					background-color: #f4f4f4;
					margin: 0;
					padding: 0;
				}
		
				.container {
					max-width: 600px;
					margin: 20px auto;
					background-color: #fff;
					padding: 20px;
					border-radius: 8px;
					box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
				}
		
				h1 {
					color: #333;
				}
		
				p {
					color: #555;
					line-height: 1.6;
				}
			</style>
		</head>
		<body>
			<div class="container">
				<h1>Olá, ${inscription.User.name}.</h1>
				<p>Sua inscrição para ${inscription.Event.description} foi confirmada.</p>
				<p>Aguardamos a sua presença!</p>
				<p>O evento está agendado para ${formattedDate}</p>
			</div>
		</body>
		</html>`;

	const mailOptions = {
		from: email,
		to: inscription.User.email,
		subject: `Confirmação de inscrição - ${inscription.Event.description}`,
		html
	};

	const transporter = nodemailer.createTransport(emailConfig);

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			return json(error, { status: 400 });
		} else {
			return json(info.response);
		}
	});
}
