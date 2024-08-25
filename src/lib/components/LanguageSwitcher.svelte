<script>
	import { availableLanguageTags } from '$lib/paraglide/runtime.js';
	import { Content, Item, DropdownMenu, Trigger } from '$lib/components/ui/dropdown-menu/index';
	import { Languages } from 'lucide-svelte';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages.js';

	const currentPathWithoutLanguage = $derived.by(() => i18n.route($page.url.pathname));
</script>

<DropdownMenu preventScroll={false}>
	<Trigger
		><Languages />
		<span class="sr-only">{m.language()}</span>
	</Trigger>
	<Content>
		{#each availableLanguageTags as lang}
			<Item href={currentPathWithoutLanguage} hreflang={lang}>
				{lang}
			</Item>
		{/each}
	</Content>
</DropdownMenu>
