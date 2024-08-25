<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime';

	import {
		DropdownMenuContent,
		DropdownMenu,
		Trigger,
		Item
	} from '$lib/components/ui/dropdown-menu';
	import '../app.css';
	import { Button } from '$lib/components/ui/button';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import { Heart, MenuIcon } from 'lucide-svelte';
	import MediaQuery from '$lib/components/MediaQuery.svelte';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="prose-xl flex min-h-[100dvh] flex-col">
		<header class="flex px-4 lg:px-6">
			<a
				class="flex items-center justify-center"
				href="/{languageTag() === 'en' ? '' : languageTag()}"
			>
				<Heart />
				<span class="sr-only">Wedding</span>
			</a>

			<nav class="ml-auto mt-2 flex items-center gap-4 sm:gap-6">
				<MediaQuery size="isAboveMD">
					{#snippet match()}
						<Button class="text-lg" variant="link" href="#wedding-party">
							{m.weddingParty()}
						</Button>
						<Button class="text-lg" variant="link" href="#registry">
							{m.registry()}
						</Button>
						<Button class="text-lg" variant="link" href="#rsvp">
							{m.rsvp()}
						</Button>
						<Button class="text-lg" variant="link" href="#contact">
							{m.contact()}
						</Button>
					{/snippet}
					{#snippet notMatch()}
						<DropdownMenu>
							<Trigger>
								<MenuIcon />
							</Trigger>
							<DropdownMenuContent>
								<Item href="#wedding-party">{m.weddingParty()}</Item>
								<Item href="#registry">{m.registry()}</Item>
								<Item href="#rsvp">{m.rsvp()}</Item>
								<Item href="#contact">{m.contact()}</Item>
							</DropdownMenuContent>
						</DropdownMenu>
					{/snippet}
				</MediaQuery>
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
