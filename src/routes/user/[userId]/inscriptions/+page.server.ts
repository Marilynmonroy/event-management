export const load = async (loadEvent) => {
	const { fetch } = loadEvent;

	const res = await fetch(`/api/events/${3}/inscriptions`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	const data = await res.json();
	const inscriptions = data;

	return {
		inscriptions
	};
};
