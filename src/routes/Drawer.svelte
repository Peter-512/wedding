<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import {
		Trigger,
		Drawer,
		Content,
		Header,
		Title,
		Close
	} from '$lib/components/ui/drawer/index.js';
	import { Separator } from '$lib/components/ui/separator';
	import '../app.css';
	import { Button } from '$lib/components/ui/button';
	import { i18n } from '$lib/i18n';
	import { langs, flags } from '$lib/components/LanguageSwitcher.svelte';
	import { MenuIcon, Signpost } from 'lucide-svelte';
	import { availableLanguageTags } from '$lib/paraglide/runtime';
	import { page } from '$app/state';

	const currentPathWithoutLanguage = $derived.by(() => i18n.route(page.url.pathname));
</script>

<Drawer>
	<Trigger>
		<MenuIcon />
	</Trigger>
	<Content>
		<Header>
			<Title><Signpost class="m-auto" /></Title>
		</Header>
		<div class="container my-4 flex flex-col justify-center gap-2">
			<Close>
				{#snippet child({ props })}
					<Button {...props} class="text-lg" href="/travel-information" variant="link">
						{m.travel_information()}
					</Button>
				{/snippet}
			</Close>
			<Close>
				{#snippet child({ props })}
					<Button {...props} class="text-lg" variant="link" href="/timeline">
						{m.timeline()}
					</Button>
				{/snippet}
			</Close>
			<Close>
				{#snippet child({ props })}
					<Button {...props} class="text-lg" variant="link" href="/favorite-spots">
						{m.fave_spots()}
					</Button>
				{/snippet}
			</Close>
			<Close>
				{#snippet child({ props })}
					<Button
						{...props}
						class="text-lg"
						variant="cta"
						target="_blank"
						href="https://www.icloud.com/invites/07d2A65KIyUtlH36b4JE5xCLQ"
					>
						{m.rsvp()}
					</Button>
				{/snippet}
			</Close>
			<Separator class="mt-4" />
			{#each availableLanguageTags as lang (lang)}
				<Close>
					{#snippet child({ props })}
						<Button {...props} variant="ghost" href={currentPathWithoutLanguage} hreflang={lang}>
							{flags[lang]}
							{langs[lang]}
						</Button>
					{/snippet}
				</Close>
			{/each}
		</div>
	</Content>
</Drawer>
