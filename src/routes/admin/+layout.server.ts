// import { redirect } from '@sveltejs/kit';
// import type { LayoutServerLoad } from './$types';

// export const load: LayoutServerLoad = ({ locals, cookies }) => {
// 	if (!locals.user) {
// 		console.log('NAO TEM USUARIO SETADO NO LOCALS NEM COOKIE');
// 		console.log('ESSE E O RESULTADO DO locals', locals.user);
// 		console.log('ESSE E O RESULTADO DO cookie', cookies.getAll());
// 		throw redirect(307, '/');
// 	} else if (locals.user.role === 'ADMIN') {
// 		console.log('Voce é admin ');
// 		throw redirect(307, '/admin');
// 	} else if (locals.user.role === 'USER') {
// 		console.log('Voce é user ');
// 		throw redirect(307, '/user');
// 	}
// 	console.log('locals', locals.user.role);
// 	console.log('cookie', cookies);
// };
