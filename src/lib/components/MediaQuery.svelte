<script lang="ts">
	import { type Snippet } from 'svelte';
	type Props = {
		query: CSSMediaRule['cssText'];
		match?: Snippet;
		notMatch?: Snippet;
	};
	const { query, match, notMatch }: Props = $props();
	let mql: MediaQueryList | null = null;
	let matches = $state(false);
	$effect(() => {
		mql = window.matchMedia(query);
		const mqlListener = (v: MediaQueryListEvent) => (matches = v.matches);
		mql.addEventListener('change', mqlListener);
		matches = mql.matches;
		return () => {
			mql?.removeEventListener('change', mqlListener);
		};
	});
</script>

{#if match && matches}
	{@render match()}
{:else if notMatch && !matches}
	{@render notMatch()}
{:else}
	{console.error('MediaQuery requires either a `match` or `notMatch` prop')}
{/if}
