import type { PageLoad } from './$types';

export const load = (async () => {
	const res = await fetch('/api/users/');
	const inscriptions = await res.json();
	return { inscriptions };
}) satisfies PageLoad;
