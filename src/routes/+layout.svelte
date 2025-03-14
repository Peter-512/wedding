<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { Separator } from '$lib/components/ui/separator';
	import '../app.css';
	import { Button } from '$lib/components/ui/button';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import { Heart } from 'lucide-svelte';
	import MediaQuery from '$lib/components/MediaQuery.svelte';
	import Drawer from './Drawer.svelte';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<div class="prose-xl flex min-h-[100dvh] flex-col">
		<header class="mt-3 flex px-4 lg:px-6">
			<Button variant="link" class="heart-button self-center" href="/">
				<Heart class="heart" />
				<span class="sr-only">{m.wedding()}</span>
			</Button>

			<nav class="ml-auto flex items-center gap-4 sm:gap-6">
				<MediaQuery size="isAboveMD">
					{#snippet match()}
						<Button class="text-lg no-underline" variant="link" href="/travel-information">
							{m.travel_information()}
						</Button>
						<Separator orientation="vertical" />
						<Button class="text-lg no-underline" variant="link" href="/timeline"
							>{m.timeline()}</Button
						>
						<Separator orientation="vertical" />
						<Button class="text-lg no-underline" variant="link" href="/favorite-spots"
							>{m.fave_spots()}</Button
						>
						<Separator orientation="vertical" />
						<Button class="text-lg no-underline" variant="link" href="/#rsvp">
							{m.rsvp()}
						</Button>
						<LanguageSwitcher />
					{/snippet}
					{#snippet notMatch()}
						<Drawer />
					{/snippet}
				</MediaQuery>
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
</ParaglideJS>

<style>
	:global(.heart) {
		transition: transform 0.3s ease-in-out;
	}

	:global(.heart-button:hover .heart) {
		animation: pulse 1.2s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		15% {
			transform: scale(1.3);
		}
		30% {
			transform: scale(1);
		}
		45% {
			transform: scale(1.2);
		}
		60% {
			transform: scale(1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
