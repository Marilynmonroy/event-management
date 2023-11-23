//Create (POST)

import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

//Read (GET)
export async function GET() {
	const users = await prisma.user.findMany({
		include: {
			events: true
		}
	});

	return json(users);
}

//Update (PUT)

//Delete (DELETE)
