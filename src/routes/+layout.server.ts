// export const load = (async (event) => {
// 	if (event.cookies.get('session_ADMIN')) {
// 		console.log('sou admin');
// 	} else if (event.cookies.get('session_USER')) {
// 		console.log('sou user');
// 	} else {
// 		console.log('sou guest');
// 	}
// }) satisfies LayoutServerLoad;

export const load = async (event) => {
	let session: string;
	if (event.cookies.get('session_ADMIN')) {
		session = 'ADMIN';
	} else if (event.cookies.get('session_USER')) {
		session = 'USER';
		console.log('sou user');
	} else {
		session = 'GUEST';
		console.log('sou guest');
	}
	return { session };
};
