import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	sair({ cookies }) {
		const sessionType = cookies.get('session_USER') ? 'USER' : 'ADMIN';

		cookies.set(`session_${sessionType}`, '', {
			path: '/',
			expires: new Date(0)
		});
	}
};
