<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime';
	import { formSchema, type FormSchema } from './contactSchema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { FormButton, FormField, FormControl } from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { FormFieldErrors, FormLabel } from '$lib/components/ui/form/index.js';
	import { Textarea } from '$lib/components/ui/textarea';
	import FlipClock from '$lib/components/FlipClock.svelte';
	import { Shine, Tilt } from 'svelte-ux';
	import imgSrc from '$lib/images/hands.jpg';
	import MediaQuery from '$lib/components/MediaQuery.svelte';

	let { data }: SuperValidated<Infer<FormSchema>> = $props();

	const form = superForm(data, {
		dataType: 'json',
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;

	const weddingDate = new Date('2025-08-03T00:00:00');
	const formattedDate = weddingDate.toLocaleDateString(languageTag(), {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long'
	});
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/a8os4jM27W0
-->
<svelte:head>
	<title>{m.ourWedding()}</title>
</svelte:head>

<section class="w-full pb-12 pt-8 md:pb-16 md:pt-12 lg:pb-24 lg:pt-16">
	<div class="container px-4 md:px-6">
		<div class="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
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
						<Tilt class="transition duration-500 [perspective:1500px] hover:scale-105">
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
				<h2 id="rsvp" class="font-fancy text-3xl sm:text-5xl">
					🚧 {m.rsvp()} 🚧
				</h2>
				<p
					class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					Let us know if you'll be joining us on our special day.
				</p>
			</div>
			<div class="mx-auto w-full max-w-sm space-y-2">
				<form class="flex flex-col gap-2">
					<input
						class="flex h-10 w-full max-w-lg flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						type="text"
						placeholder="Your Name"
					/>
					<input
						class="flex h-10 w-full max-w-lg flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						type="email"
						placeholder="Your Email"
					/>
					<textarea
						class="flex min-h-[80px] w-full max-w-lg flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						placeholder="RSVP Message"
					></textarea>
					<button
						disabled
						class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						type="submit"
					>
						RSVP
					</button>
				</form>
			</div>
		</div>
	</div>
</section>
