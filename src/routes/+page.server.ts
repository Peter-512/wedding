import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

	const { data: guestbook, error: supaError } = await supabase
		.from('guestbook')
		.select('timestamp, name, message')
		.order('timestamp', { ascending: false });
	if (supaError) return error(500, 'Something went wrong');

	return { guestbook };
};
