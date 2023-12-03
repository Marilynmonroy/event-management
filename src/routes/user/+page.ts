export const load = async (loadEvent) => {
	const { fetch } = loadEvent;
	const res = await fetch('/api/users');
	const users = await res.json();

	return {
		users
	};
};
