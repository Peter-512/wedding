<script>
	import * as m from '$lib/paraglide/messages.js';

	import '../app.css';
	import { Button } from '$lib/components/ui/button';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="prose-xl flex min-h-[100dvh] flex-col">
		<header class="flex h-14 items-center px-4 lg:px-6">
			<a class="flex items-center justify-center" href="#">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-6 w-6"
				>
					<path
						d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
					></path>
				</svg>
				<span class="sr-only">Wedding</span>
			</a>
			<nav class="ml-auto flex gap-4 sm:gap-6">
				<Button
					variant="link"
					class="text-sm font-medium underline-offset-4 hover:underline"
					href="#"
				>
					{m.weddingParty()}
				</Button>
				<Button
					variant="link"
					class="text-sm font-medium underline-offset-4 hover:underline"
					href="#"
				>
					Registry
				</Button>
				<Button
					variant="link"
					class="text-sm font-medium underline-offset-4 hover:underline"
					href="#"
				>
					RSVP
				</Button>
				<Button
					variant="link"
					class="text-sm font-medium underline-offset-4 hover:underline"
					href="#"
				>
					Contact
				</Button>
				<LanguageSwitcher />
			</nav>
		</header>
		<main class="flex-1">
			{@render children()}
		</main>
		<footer
			class="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6"
		>
			<p class="text-xs text-muted-foreground">
				© 2024 Charlotte &amp; Peter. All rights reserved.
			</p>
			<nav class="flex gap-4 sm:ml-auto sm:gap-6">
				<a class="text-xs underline-offset-4 hover:underline" href="#"> Privacy </a>
				<a class="text-xs underline-offset-4 hover:underline" href="#"> Terms </a>
			</nav>
		</footer>
	</div>
</ParaglideJS>
