<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime';
	import { Button } from '$lib/components/ui/button';
	import FlipClock from '$lib/components/FlipClock.svelte';
	import { Shine, Tilt } from 'svelte-ux';
	import imgSrc from '$lib/images/hands.jpg';
	import MediaQuery from '$lib/components/MediaQuery.svelte';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Input } from '$lib/components/ui/input';
	import { formatDistanceToNow } from 'date-fns';
	import { de, enUS, nlBE } from 'date-fns/locale';
	import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
	import { createClient } from '@supabase/supabase-js';
	import { error } from '@sveltejs/kit';

	const locale = languageTag() === 'en' ? enUS : languageTag() === 'de' ? de : nlBE;

	const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

	const weddingDate = new Date('2025-08-03T00:00:00');
	const formattedDate = weddingDate.toLocaleDateString(languageTag(), {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long'
	});

	type Entry = {
		name: string;
		message: string;
		timestamp: number;
	};

	let { data } = $props();

	let entries = $state<Entry[]>(data.guestbook);
	let name = $state('');
	let message = $state('');

	const addEntry = async () => {
		if (name.trim() && message.trim()) {
			const timestamp = Date.now();
			entries.unshift({ name, message, timestamp });
			const { error: supaError } = await supabase
				.from('guestbook')
				.insert({ name, message, timestamp: new Date(timestamp) });
			if (supaError) return error(500, `Something went wrong`);

			name = '';
			message = '';
		}
	};
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/a8os4jM27W0
-->
<svelte:head>
	<title>{m.ourWedding()}</title>
	<meta content={imgSrc} property="og:image" />
	<meta content="3.8.2025 ❤️" property="og:title" />
	<meta content="Charlotte's and Peter's wedding" property="og:description" />
	<meta content="https://wedding-beta-sooty-68.vercel.app/" property="og:url" />
</svelte:head>

<section class="w-full pb-12 pt-8 md:pb-16 md:pt-12 lg:pb-24 lg:pt-16">
	<div class="container px-4 md:px-6">
		<div class="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
			<MediaQuery size="isAboveMD">
				{#snippet match()}
					<Shine
						depth={10}
						lightColor="#D3D3FF"
						specularExponent={80}
						specularConstant={0.2}
						lightRadius={120}
					>
						<Tilt
							maxRotation={5}
							class="transition duration-500 [perspective:1500px] hover:scale-[1.02]"
						>
							<img
								src={imgSrc}
								alt="Wedding Hero"
								class="mx-auto aspect-square overflow-hidden rounded-xl object-cover transition ease-out sm:w-full lg:order-last"
							/>
						</Tilt>
					</Shine>
				{/snippet}
				{#snippet notMatch()}
					<enhanced:img
						src="../lib/images/hands.jpg"
						alt="holding hands"
						class="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
					/>
				{/snippet}
			</MediaQuery>
			<div class="flex flex-col justify-center space-y-4">
				<div class="space-y-2">
					<h1 class="text-bold text-3xl uppercase sm:text-5xl xl:text-6xl/none">
						Charlotte &amp; Peter
					</h1>
					<p class="max-w-[600px] text-muted-foreground md:text-3xl">{formattedDate}</p>
					<FlipClock date={weddingDate} />
				</div>
			</div>
		</div>
	</div>
</section>

<section class="w-full bg-muted py-12 md:py-24 lg:py-32">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
				<h2 id="rsvp" class="text-3xl uppercase sm:text-5xl">
					{m.rsvp()}
				</h2>
				<p
					class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					{m.rsvp_description()}
				</p>
			</div>
			<Button
				variant="cta"
				target="_blank"
				href="https://www.icloud.com/invites/07d2A65KIyUtlH36b4JE5xCLQ"
			>
				{m.rsvp_cta()}
			</Button>
			<Button
				variant="link"
				target="_blank"
				href="https://apps.apple.com/be/app/apple-invites/id6472498645"
			>
				{m.rsvp_download_app()}
			</Button>
		</div>
	</div>
</section>

<section class="w-full pb-12 pt-8 md:pb-16 md:pt-12 lg:pb-24 lg:pt-16">
	<div class="container max-w-3xl px-4 md:px-6">
		<h2 class="text-center text-3xl uppercase sm:text-5xl">{m.guestbook()}</h2>
		<div class="mx-auto max-w-lg space-y-2">
			<Input placeholder={m.yourName()} bind:value={name} class="w-full rounded-lg border p-2" />
			<Textarea
				placeholder={m.yourMessage()}
				bind:value={message}
				class="w-full rounded-lg border p-2"
			/>
			<Button onclick={addEntry} class="w-full">{m.sign_guestbook()}</Button>
		</div>
		<div class="not-prose mt-6 space-y-4 rounded-lg p-4">
			{#each entries as { name, message, timestamp }}
				<div class="border-b pb-2 last:border-b-0">
					<p class="text-xl font-semibold">{name}</p>
					<p class="text-base text-gray-700">{message}</p>
					<p class="text-xs text-gray-500">
						{formatDistanceToNow(timestamp, {
							addSuffix: true,
							includeSeconds: true,
							locale: locale
						})}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
