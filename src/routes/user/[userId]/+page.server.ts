export const load = async (loadEvent) => {
	const { fetch, params, url, route } = loadEvent;
	console.log({ params, url, route: route.id });

	const { userId } = params;
	const res = await fetch(`/api/users/${userId}`);
	const user = await res.json();

	return {
		user: user.id
	};
};
