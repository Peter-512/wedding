<script lang="ts">
	import MediaQuery from '$lib/components/MediaQuery.svelte';
	import { Shine } from 'svelte-ux';
	import type { Snippet } from 'svelte';

	const { children, displayForMobile = false }: { children: Snippet; displayForMobile?: boolean } =
		$props();
</script>

<MediaQuery size="isAboveMD">
	{#snippet match()}
		<Shine
			depth={10}
			lightColor="#D3D3FF"
			specularExponent={80}
			specularConstant={0.2}
			surfaceScale={5}
			lightRadius={120}
		>
			{@render children()}
		</Shine>
	{/snippet}
	{#snippet notMatch()}
		{#if displayForMobile}
			{@render children()}
		{/if}
	{/snippet}
</MediaQuery>
