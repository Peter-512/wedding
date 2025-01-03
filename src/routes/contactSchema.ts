import { z } from 'zod';

import * as m from '$lib/paraglide/messages.js';

export const formSchema = z.object({
	name: z.string().min(2, { message: m.nameIsTooShort() }).max(50, { message: m.nameIsTooLong() }),
	email: z.string().email({ message: m.invalidEmailAddress() }),
	message: z
		.string()
		.min(1, { message: m.messageIsTooShort() })
		.max(500, { message: m.messageIsTooLong() })
});

export type FormSchema = typeof formSchema;
