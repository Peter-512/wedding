<script>
	import { availableLanguageTags } from '$lib/paraglide/runtime.js';
	import { Content, Item, DropdownMenu, Trigger } from '$lib/components/ui/dropdown-menu/index';
	import { i18n } from '$lib/i18n';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages.js';

	const currentPathWithoutLanguage = $derived.by(() => i18n.route($page.url.pathname));

	const flags = {
		en: '🇺🇸',
		de: '🇦🇹',
		nl: '🇧🇪'
	};

	const langs = {
		en: 'English',
		de: 'Deutsch',
		nl: 'Nederlands',
	}
</script>

<DropdownMenu preventScroll={false}>
	<Trigger>
		{flags[languageTag()]}
		<span class="sr-only">{m.language()}</span>
	</Trigger>
	<Content>
		{#each availableLanguageTags as lang}
			<Item href={currentPathWithoutLanguage} hreflang={lang}>
				{flags[lang]} {langs[lang]}
			</Item>
		{/each}
	</Content>
</DropdownMenu>
