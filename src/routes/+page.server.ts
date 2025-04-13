import type { PageServerLoad } from './$types';
import { supabase } from '$lib/db/supabase';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const { data: guestbook, error: supaError } = await supabase
		.from('guestbook')
		.select('timestamp, name, message, image')
		.order('timestamp', { ascending: false });
	if (supaError) return error(412, 'Something went wrong');

	return { guestbook };
};
