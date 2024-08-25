<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { languageTag } from '$lib/paraglide/runtime';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { formSchema, type FormSchema } from './contactSchema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { FormButton, FormField, FormControl } from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { FormFieldErrors, FormLabel } from '$lib/components/ui/form/index.js';
	import { Textarea } from '$lib/components/ui/textarea';

	let { data }: SuperValidated<Infer<FormSchema>> = $props();

	const form = superForm(data, {
		dataType: 'json',
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;

	const date = new Date('2025-08-03').toLocaleDateString(languageTag(), {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long'
	});

	interface Result {
		picture: Picture;
	}
	interface Picture {
		large: string;
		medium: string;
		thumbnail: string;
	}

	let pictures = $state<string[]>([]);
	$effect(() => {
		fetch('https://randomuser.me/api/?results=12')
			.then((res) => res.json())
			.then((data) => {
				pictures = data.results.map((result: Result) => result.picture.thumbnail);
			});
	});

	type Person = {
		name: string;
		fallback: string;
		role: string;
		image: () => string;
	};

	const people = $state<Person[]>([
		{
			name: 'John Doe',
			fallback: 'JD',
			role: 'Best man',
			image: () => pictures[0]
		},
		{
			name: 'Jane Arden',
			fallback: 'JA',
			role: 'Maid of honor',
			image: () => pictures[1]
		},
		{
			name: 'Tom Smith',
			fallback: 'TS',
			role: 'Groomsman',
			image: () => pictures[2]
		},
		{
			name: 'Emily Sato',
			fallback: 'ES',
			role: 'Bridesmaid',
			image: () => pictures[3]
		},
		{
			name: 'Ryan Jones',
			fallback: 'RJ',
			role: 'Groomsman',
			image: () => pictures[4]
		},
		{
			name: 'Sarah Johnson',
			fallback: 'SJ',
			role: 'Bridesmaid',
			image: () => pictures[5]
		},
		{
			name: 'Michael Brown',
			fallback: 'MB',
			role: 'Groomsman',
			image: () => pictures[6]
		},
		{
			name: 'Jessica Lee',
			fallback: 'JL',
			role: 'Bridesmaid',
			image: () => pictures[7]
		},
		{
			name: 'David White',
			fallback: 'DW',
			role: 'Groomsman',
			image: () => pictures[8]
		}
	]);
</script>

<!--
// v0 by Vercel.
// https://v0.dev/t/a8os4jM27W0
-->
<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
	<div class="container px-4 md:px-6">
		<div class="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
			<enhanced:img
				src="../lib/images/hands.jpg"
				alt="Wedding Hero"
				class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
			/>
			<div class="flex flex-col justify-center space-y-4">
				<div class="space-y-2">
					<h1 class="whitespace-nowrap font-fancy text-3xl sm:text-5xl xl:text-6xl/none">
						Charlotte &amp; Peter
					</h1>
					<p class="max-w-[600px] text-muted-foreground md:text-xl">{date}</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="w-full bg-muted py-12 md:py-24 lg:py-32">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
				<h2 id="wedding-party" class="font-fancy text-3xl sm:text-5xl">
					{m.ourWeddingParty()}
				</h2>
				<p
					class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					{m.MeetThePeople()}
				</p>
			</div>
			<div class="grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{#each people as person}
					<div class="flex flex-col items-center gap-2">
						<Avatar>
							<AvatarImage class="not-prose" src={person.image()} alt={person.name} />
							<AvatarFallback>{person.fallback}</AvatarFallback>
						</Avatar>
						<div class="text-center">
							<p class="text-sm font-medium">{person.name}</p>
							<p class="text-sm text-muted-foreground">{person.role}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
<section class="w-full py-12 md:py-24 lg:py-32">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
				<h2 id="registry" class="font-fancy text-3xl sm:text-5xl">
					{m.ourWeddingRegistry()}
				</h2>
				<p
					class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					Help us celebrate our special day by contributing to our wedding registry.
				</p>
			</div>
			<div class="flex flex-col gap-2 min-[400px]:flex-row">
				<a
					class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					href="#"
				>
					View Registry
				</a>
				<a
					class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					href="#"
				>
					Gift Ideas
				</a>
			</div>
		</div>
	</div>
</section>
<section class="w-full bg-muted py-12 md:py-24 lg:py-32">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
				<h2 id="rsvp" class="font-fancy text-3xl sm:text-5xl">
					{m.rsvp()}
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
<section class="w-full py-12 md:py-24 lg:py-32">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center justify-center space-y-4 text-center">
			<div class="space-y-2">
				<h2 id="contact" class="font-fancy text-3xl sm:text-5xl">{m.contactUs()}</h2>
				<p
					class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					Have a question or need more information? Get in touch with us.
				</p>
			</div>
			<div class="w-full max-w-sm space-y-2">
				<form use:enhance method="POST" action="?/contact">
					<FormField {form} name="name">
						<FormControl let:attrs>
							<FormLabel class="sr-only">{m.name()}</FormLabel>
							<Input {...attrs} placeholder={m.yourName()} bind:value={$formData.name} />
						</FormControl>
						<FormFieldErrors />
					</FormField>
					<FormField {form} name="email">
						<FormControl let:attrs>
							<FormLabel class="sr-only">{m.email()}</FormLabel>
							<Input {...attrs} placeholder={m.yourEmail()} bind:value={$formData.email} />
						</FormControl>
						<FormFieldErrors />
					</FormField>
					<FormField {form} name="message">
						<FormControl let:attrs>
							<FormLabel class="sr-only">{m.message()}</FormLabel>
							<Textarea {...attrs} placeholder={m.yourMessage()} bind:value={$formData.message}
							></Textarea>
						</FormControl>
						<FormFieldErrors />
					</FormField>
					<FormButton class="h-10 w-full" type="submit">{m.sendMessage()}</FormButton>
				</form>
			</div>
		</div>
	</div>
</section>
