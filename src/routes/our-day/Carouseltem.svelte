<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card/index.js';
	import { Item } from '$lib/components/ui/carousel/index.js';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<Item class="pl-1">
	<div class="p-1">
		<Card>
			<CardContent class="not-prose flex aspect-square items-center justify-center">
				{@render children()}
			</CardContent>
		</Card>
	</div>
</Item>
