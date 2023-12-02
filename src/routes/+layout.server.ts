export const load = async (event) => {
	let session: string;
	if (event.cookies.get('session_ADMIN')) {
		session = 'ADMIN';
		console.log('sou Admin');
	} else if (event.cookies.get('session_USER')) {
		session = 'USER';
		console.log('sou user');
	} else {
		session = 'GUEST';
		console.log('sou guest');
	}
	return { session };
};
