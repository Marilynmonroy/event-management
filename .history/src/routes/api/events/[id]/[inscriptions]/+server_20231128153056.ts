import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

// export async function GET({ params }) {
// 	const eventInscriptions = await prisma.event.findUnique({
// 		where: {
// 			id: Number(params.id)
// 		},
// 		include: {
// 			users: {
// 				include: {
// 					User: true
// 				}
// 			}
// 		}
// 	});
// 	return json(eventInscriptions);
// }

export async function GET({ params }) {
	const eventInscriptions = await prisma.event.findMany({
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

    const header = '"Nome";"Fone":"Cidade"\n';
    let csv = header;
    
    for (const idx in eventInscriptions) {
       const pessoa = eventInscriptions[idx];
       csv += pessoa.nome + ';' + pessoa.fone + ';' + pessoa.cidade + '\n';
    }
 
    res.append('Content-Type','text/csv');
    res.attachment('output.csv');
    res.send(csv);

	return json(eventInscriptions);
}
