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
			<Button
				variant="link"
				class="self-center"
				href="/{languageTag() === 'en' ? '' : languageTag()}"
			>
				<Heart />
				<span class="sr-only">{m.wedding()}</span>
			</Button>

			<nav class="ml-auto mt-2 flex items-center gap-4 sm:gap-6">
				<MediaQuery size="isAboveMD">
					{#snippet match()}
						<Button class="text-lg" variant="link" href="/travel-information">
							Travel information
						</Button>
						<Button class="text-lg" variant="link" href="/timeline">Timeline</Button>
						<Button class="text-lg" variant="link" href="/favorite-spots">Favorite spots</Button>
						<Button class="text-lg" variant="link" href="/#rsvp">
							{m.rsvp()}
						</Button>
					{/snippet}
					{#snippet notMatch()}
						<DropdownMenu>
							<Trigger>
								<MenuIcon />
							</Trigger>
							<DropdownMenuContent>
								<Item><a href="/travel-information">Travel information</a></Item>
								<Item><a href="/timeline">Timeline</a></Item>
								<Item><a href="/favorite-spots">Favorite spots</a></Item>
								<Item><a href="/#rsvp">{m.rsvp()}</a></Item>
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
		</footer>
	</div>
</ParaglideJS>
