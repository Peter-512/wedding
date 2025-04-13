<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import Logo from './Logo.svelte';

	const links = {
		'/favorite-spots': m.favorites,
		'/glamping': m.glamping,
		'/timeline': m.timeline,
		'/travel-information': m.travel_information
	};

	const isValidLink = $derived(page.route.id !== null && page.route.id in links);
</script>

<Breadcrumb.Root class="mt-0 font-freeserif">
	<Breadcrumb.List class="my-0 pl-0">
		<Breadcrumb.Item class="my-0 pr-0">
			<Breadcrumb.Link>
				{#snippet child({ props })}
					<Button {...props} variant="link" class="self-center px-0" href="/">
						<Logo class="h-12 w-12" />
						<span class="sr-only">{m.wedding()}</span>
					</Button>
				{/snippet}
			</Breadcrumb.Link>
		</Breadcrumb.Item>
		{#if isValidLink}
			<Breadcrumb.Separator />
			<Breadcrumb.Item class="my-0 pr-0">
				<Breadcrumb.Link>
					{#snippet child({ props })}
						<Button
							{...props}
							href={page.route.id}
							variant="link"
							class="px-0 font-freeserif uppercase tracking-widest"
						>
							{@html links[page.route.id]()}
						</Button>
					{/snippet}
				</Breadcrumb.Link>
			</Breadcrumb.Item>
		{/if}
	</Breadcrumb.List>
</Breadcrumb.Root>
