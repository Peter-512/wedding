<script lang="ts">
	import { type Snippet } from 'svelte';
	import { tailwindSizes, type TailwindSizeKey } from '$lib/helpers/tailwindSizes';
	type Props = {
		size: TailwindSizeKey;
		match?: Snippet;
		notMatch?: Snippet;
	};

	const { size, match, notMatch }: Props = $props();
	let mql: MediaQueryList | null = null;
	let matches = $state(false);
	$effect(() => {
		mql = window.matchMedia(`(min-width: ${tailwindSizes[size]}px)`);
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
	{console.error(
		`MediaQuery requires either a \`match\` or \`notMatch\` prop but neither was provided. Match: ${match}, Not Match: ${notMatch}`
	)}
{/if}
