import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
	if (event.cookies.get('session_ADMIN')) {
		console.log('sou admin');
	} else if (event.cookies.get('session_USER')) {
		console.log('sou user');
	} else {
		console.log('sou guest');
	}
}) satisfies LayoutServerLoad;
