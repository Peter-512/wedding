<script lang="ts">
	import MediaQuery from '$lib/components/MediaQuery.svelte';
	import { Shine } from 'svelte-ux';
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<MediaQuery size="isAboveMD">
	{#snippet match()}
		<Shine
			depth={3}
			lightColor="#E6E6FA"
			specularExponent={60}
			specularConstant={0.35}
			surfaceScale={5}
			lightRadius={250}
		>
			{@render children()}
		</Shine>
	{/snippet}
</MediaQuery>
