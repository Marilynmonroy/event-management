import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';
import * as puppeteer from 'puppeteer';

export async function GET({ params }) {
	const inscriptionId = params.id;

	const inscription = await prisma.inscription.findUnique({
		where: { id: Number(inscriptionId) },
		include: { User: true, Event: true }
	});

	if (!inscription) {
		return json('Inscrição não encontrada.');
	}

	const pdfResponse = await pdf(inscription);

	return pdfResponse;
}

async function pdf(inscription) {
	const eventDate = inscription.Event.dateTime;
	const formattedDate = eventDate
		? new Date(eventDate).toLocaleString('pt-BR', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				timeZoneName: 'short'
		  })
		: '';

	const html: string = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: Arial, sans-serif;
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

            h1, h2 {
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
            <h1>Comprovante de Comparecimento</h1>
            <p>Atesta-se para os devidos fins, que ${inscription.User.name} ${inscription.User.lastname} esteve presente no seguinte evento:</p>
            <h4>${inscription.Event.description}</h4>
            <p>Data e hora do evento: ${formattedDate}</p>
            <br>
            <p>Atenciosamente,</p>
            <h4>Equipe Eventure</h4>
        </div>
    </body>
    </html>
    `;

	const browser = await puppeteer.launch({ headless: 'new' });
	const page = await browser.newPage();
	await page.setViewport({ width: 1366, height: 768 });
	await page.setContent(html);

	const pdfBuffer = await page.pdf({ format: 'A4' });
	await page.close();
	await browser.close();

	const body = pdfBuffer;

	return new Response(body, {
		status: 200,
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'attachment; filename=comprovante.pdf'
		}
	});
}

