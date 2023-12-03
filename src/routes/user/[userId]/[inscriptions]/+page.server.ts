export const load = async (loadEvent) => {
	const { fetch, params } = loadEvent;

	const { userId } = params;
	const res = await fetch(`/api/events/${userId}/inscriptions`);
	const inscriptions = await res.json();

	return {
		inscription: inscriptions
	};
};
