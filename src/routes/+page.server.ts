import Contact from '$lib/components/email/Contact.svelte';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { sendEmail } from '$lib/server/sendEmail';
import type { PageServerLoad } from './$types.js';
import { formSchema } from './contactSchema';
import type { Actions } from './$types';
import { render } from 'svelte-email';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions = {
	contact: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		const { name, email, message } = form.data;

		const html = render({
			template: Contact,
			props: {
				name: name,
				message: message,
				sender: email
			}
		});

		await sendEmail({ subject: 'Contact', html });
		return { form };
	}
} satisfies Actions;
