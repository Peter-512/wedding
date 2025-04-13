<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { Separator } from '$lib/components/ui/separator';
	import '../app.css';
	import { Button } from '$lib/components/ui/button';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import Drawer from './Drawer.svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import Home from './Home.svelte';

	let { children } = $props();

	const match = new MediaQuery('(min-width: 950px)');
</script>

<ParaglideJS {i18n}>
	<div
		class="prose-xl flex min-h-[100dvh] flex-col prose-h1:font-freeserif prose-h2:font-scandilover prose-h2:text-6xl prose-h3:font-freeserif prose-h3:font-bold prose-h3:uppercase prose-h3:tracking-widest prose-p:font-freeserif prose-p:tracking-widest prose-li:font-freeserif prose-li:tracking-wide md:prose-li:tracking-wider"
	>
		<header class="mt-3 flex px-4 lg:px-6">
			<Home />
			<nav class="text-md ml-auto flex items-center gap-2 font-freeserif uppercase">
				{#if match.current}
					<Button class="no-underline" variant="link" href="/travel-information">
						{@html m.travel_information()}
					</Button>
					<Separator orientation="vertical" />
					<Button class="no-underline" variant="link" href="/timeline">{m.timeline()}</Button>
					<Separator orientation="vertical" />
					<Button class="no-underline" variant="link" href="/favorite-spots"
						>{@html m.fave_spots()}</Button
					>
					<Separator orientation="vertical" />
					<Button class="no-underline" variant="link" href="/glamping">
						{m.glamping()}
					</Button>
					<LanguageSwitcher />
				{:else}
					<Drawer />
				{/if}
			</nav>
		</header>
		<main class="flex-1">
			{@render children()}
		</main>
		<footer class="flex w-full shrink-0 flex-col items-center gap-2 px-4 py-6 sm:flex-row md:px-6">
			<p class="text-xs text-muted-foreground">
				© 2025 Charlotte &amp; Peter. {m.all_rights_reserved()}
			</p>
		</footer>
	</div>
	<Toaster />
</ParaglideJS>
