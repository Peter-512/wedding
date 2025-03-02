<script module>
	export const flags = {
		en: '🇺🇸',
		de: '🇦🇹',
		nl: '🇧🇪'
	};

	export const langs = {
		en: 'English',
		de: 'Deutsch',
		nl: 'Nederlands'
	};
</script>

<script>
	import { availableLanguageTags } from '$lib/paraglide/runtime.js';
	import { Content, Item, DropdownMenu, Trigger } from '$lib/components/ui/dropdown-menu/index';
	import { i18n } from '$lib/i18n';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import { page } from '$app/state';
	import * as m from '$lib/paraglide/messages.js';

	const currentPathWithoutLanguage = $derived.by(() => i18n.route(page.url.pathname));
</script>

<DropdownMenu>
	<Trigger>
		{flags[languageTag()]}
		<span class="sr-only">{m.language()}</span>
	</Trigger>
	<Content>
		{#each availableLanguageTags as lang}
			<a href={currentPathWithoutLanguage} hreflang={lang}>
				<Item>
					{flags[lang]}
					{langs[lang]}
				</Item>
			</a>
		{/each}
	</Content>
</DropdownMenu>
