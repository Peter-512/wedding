<script lang="ts">
	import { Hr, Html, Text } from 'svelte-email';

	export let name: string;
	export let message: string;
	export let sender: string;
</script>

<Html lang="en">
	<Text>
		Hello from {name} 👋🏻!
	</Text>
	{#if message}
		<Hr />
		<Text>
			{message}
		</Text>
	{/if}
	<Hr />
	<Text>
		Have a great day!
		{sender}
	</Text>
</Html>
