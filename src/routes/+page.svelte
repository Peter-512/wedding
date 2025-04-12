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
	import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
	import { createClient } from '@supabase/supabase-js';
	import { error } from '@sveltejs/kit';
	import { getCurrentLocale } from '$lib/utils';
	import Canvas from './Canvas.svelte';
	import type { ComponentProps } from 'svelte';
	import { toast } from 'svelte-sonner';

	let locale = getCurrentLocale();

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
		image: string | null;
	};

	let { data } = $props();

	let entries = $state<Entry[]>(data.guestbook);
	let name = $state('');
	let message = $state('');
	let imageUrl: string | null = $state(null);
	let canvas = $state<Canvas>();

	const setImgUrl: ComponentProps<typeof Canvas>['setImgUrl'] = (url) => (imageUrl = url);

	const addEntry = async () => {
		if (name.trim() && message.trim()) {
			const timestamp = Date.now();
			entries.unshift({ name, message, timestamp, image: imageUrl });
			const { error: supaError } = await supabase
				.from('guestbook')
				.insert({ name, message, timestamp: new Date(timestamp), image: imageUrl });
			if (supaError) {
				toast.error(m.error_adding_entry());
				return;
			}
			toast.success(m.entry_added());

			imageUrl = null;
			name = '';
			message = '';
			canvas?.reset();
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
						surfaceScale={5}
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
					<h1 class="text-bold text-3xl uppercase tracking-widest sm:text-5xl xl:text-6xl/none">
						Charlotte <div class="font-scandilover lowercase tracking-normal">{m.and()}</div>
						Peter
					</h1>
					<p
						class="font-arimo max-w-[600px] font-thin uppercase tracking-widest text-muted-foreground md:text-2xl"
					>
						{formattedDate}
					</p>
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
				<h2 id="rsvp" class="mt-0 text-3xl sm:text-5xl">
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
				class="font-arimo"
				target="_blank"
				href="https://forms.gle/8xuTPidmhvNfdTKh6"
			>
				{m.rsvp_cta()}
			</Button>
		</div>
	</div>
</section>

<section class="w-full pb-12 pt-12 md:pb-16 md:pt-24 lg:pb-24 lg:pt-32">
	<div class="container max-w-3xl px-4 md:px-6">
		<h2 class="mt-0 text-center text-2xl md:text-5xl">{m.guestbook()}</h2>
		<div class="mx-auto max-w-lg space-y-2">
			<Input
				placeholder={m.yourName()}
				bind:value={name}
				class="font-arimo w-full rounded-sm border p-2 placeholder:text-stone-500"
			/>
			<Textarea
				placeholder={m.yourMessage()}
				bind:value={message}
				class="font-arimo w-full rounded-sm border p-2 placeholder:text-stone-500"
			/>
			<Canvas bind:this={canvas} {setImgUrl} />
			<Button
				onclick={addEntry}
				disabled={name === '' || message === ''}
				class="font-arimo w-full rounded-sm">{m.sign_guestbook()}</Button
			>
		</div>
		<div class="mt-6 space-y-4 py-4">
			{#each entries as { name, message, timestamp, image }}
				<div class="border-b pb-2 last:border-b-0">
					<div class="flex flex-col sm:flex-row sm:items-center">
						<div class="flex-1">
							<p class="m-0 text-xl font-semibold">{name}</p>
							<p class="m-0 text-base text-gray-700">{message}</p>
							<p class="m-0 text-xs text-gray-500">
								{formatDistanceToNow(timestamp, {
									addSuffix: true,
									includeSeconds: true,
									locale: locale
								})}
							</p>
						</div>
						{#if image}
							<div class="mt-4 sm:ml-4 sm:mt-0">
								<img
									src={image}
									alt="Signature of {name}"
									class="m-0 h-auto max-h-24 max-w-full object-contain"
								/>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@media (max-width: 380px) {
		h2 {
			@apply text-5xl;
		}
	}
</style>
