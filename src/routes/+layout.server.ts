// import { redirect } from '@sveltejs/kit';
// import type { LayoutServerLoad } from './$types';
// export const load: LayoutServerLoad = ({ cookies }) => {
// 	console.log(cookies.get('session_ADMIN'));

// 	if (cookies.get('session_ADMIN')) {
// 		throw redirect(307, '/admin ');
// 	} else if (cookies.get('session_USER')) {
// 		throw redirect(307, '/user');
// 	} else {
// 		throw redirect(307, '/');
// 	}
// };
