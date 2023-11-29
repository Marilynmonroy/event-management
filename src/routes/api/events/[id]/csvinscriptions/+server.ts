import prisma from '$lib/prisma';

export async function GET({ params }) {
	const eventInscriptions = await prisma.event.findUnique({
		where: {
			id: Number(params.id)
		},
		include: {
			users: {
				include: {
					User: true
				}
			}
		}
	});

	let csv;

	if (!eventInscriptions) {
		csv = '"Nome";"Sobrenome";"Telefone";"E-mail"\n';
	} else {
		const inscriptions = eventInscriptions.users;

		const header = '"Nome";"Sobrenome";"Telefone";"E-mail"\n';
		csv = header;

		for (let i = 0; i < inscriptions.length; i++) {
			const user = inscriptions[i];
			csv += `${user.User.name};${user.User.lastname};${user.User.phone};${user.User.email}\n`;
		}
	}

	const body = new TextEncoder().encode(csv);

	return new Response(body, {
		status: 200,
		headers: {
			'Content-Type': 'text/csv',
			'Content-Disposition': 'attachment; filename=inscritos.csv'
		}
	});
}

