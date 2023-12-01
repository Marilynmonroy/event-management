// // import { redirect } from '@sveltejs/kit';
// // import type { Actions, PageServerLoad } from './$types';

// import type { Actions } from '@sveltejs/kit';

// // export const load: PageServerLoad = async () => {
// // 	// we only use this endpoint for the api
// // 	// and don't need to see the page
// // 	throw redirect(302, '/');
// // };

// // export const actions: Actions = {
// // 	sair:({ cookies }) {
// // 		cookies.set('session', '', {
// // 			path: '/',
// // 			expires: new Date(0)
// // 		});
// // 	}
// // };

// export const actions: Actions = {
// 	sair: ({ cookies }) => {
// 		const teste = cookies.get.arguments;

// 		console.log(teste);
// 		cookies.set(`${teste}`, '', {
// 			path: '/',
// 			httpOnly: true,
// 			sameSite: 'strict'
// 		});

// 		const teste2 = cookies.getAll();
// 		console.log('pos delete', teste2);
// 	}
// };
