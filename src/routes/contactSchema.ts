import { z } from 'zod';

import * as m from '$lib/paraglide/messages.js';

export const formSchema = z.object({
	name: z
		.string()
		.min(2, { message: m.nameIsTooShort as unknown as string })
		.max(50, { message: m.nameIsTooLong as unknown as string }),
	email: z.string().email({ message: m.invalidEmailAddress as unknown as string }),
	message: z
		.string()
		.min(1, { message: m.messageIsTooShort as unknown as string })
		.max(500, { message: m.messageIsTooLong as unknown as string })
});

export type FormSchema = typeof formSchema;
