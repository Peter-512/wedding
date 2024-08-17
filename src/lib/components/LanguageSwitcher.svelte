<script>
	import { availableLanguageTags } from '$lib/paraglide/runtime.js';
	import { Content, Item, DropdownMenu, Trigger } from '$lib/components/ui/dropdown-menu/index';
	import { Languages } from 'lucide-svelte';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';

	const currentPathWithoutLanguage = $derived.by(() => i18n.route($page.url.pathname));
</script>

<DropdownMenu preventScroll={false}>
	<Trigger><Languages /></Trigger>
	<Content>
		{#each availableLanguageTags as lang}
			<Item href={currentPathWithoutLanguage} hreflang={lang}>
				{lang}
			</Item>
		{/each}
	</Content>
</DropdownMenu>
