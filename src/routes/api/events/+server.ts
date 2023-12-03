import prisma from '$lib/prisma';
import { json } from '@sveltejs/kit';

export async function GET() {
	const events = await prisma.event.findMany();
	return json(events);
}
