import type { Action, Actions } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

const register: Action = async ({ request }) => {
	const { email, password } = await request.json;
};

export const actions: Actions = {
	register
};
