<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { availableLanguageTags } from '$lib/paraglide/runtime.js';

	import { page } from '$app/stores';
	import { i18n } from '$lib/i18n';
	const language = { de: 'german', en: 'english', nl: 'dutch' } as const;

	const currentPathWithoutLanguage = $derived.by(() => i18n.route($page.url.pathname));
</script>

<h1>{m.hello_world()}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#each availableLanguageTags as lang}
	<div>
		<a href={currentPathWithoutLanguage} hreflang={lang}
			>{m.check_out_language({ language: m[language[lang]]() })}</a
		>
	</div>
{/each}

<!--
// v0 by Vercel.
// https://v0.dev/t/a8os4jM27W0
-->

<div class="flex min-h-[100dvh] flex-col">
	<header class="flex h-14 items-center px-4 lg:px-6">
		<a class="flex items-center justify-center" href="#">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-6 w-6"
			>
				<path
					d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
				></path>
			</svg>
			<span class="sr-only">Wedding</span>
		</a>
		<nav class="ml-auto flex gap-4 sm:gap-6">
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="#"> Wedding Party </a>
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="#"> Registry </a>
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="#"> RSVP </a>
			<a class="text-sm font-medium underline-offset-4 hover:underline" href="#"> Contact </a>
		</nav>
	</header>
	<main class="flex-1">
		<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
			<div class="container px-4 md:px-6">
				<div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<img
						src="/placeholder.svg"
						width="550"
						height="550"
						alt="Wedding Hero"
						class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
					/>
					<div class="flex flex-col justify-center space-y-4">
						<div class="space-y-2">
							<h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Charlotte &amp; Peter
							</h1>
							<p class="max-w-[600px] text-muted-foreground md:text-xl">August 3rd, 2025</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="w-full bg-muted py-12 md:py-24 lg:py-32">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Our Wedding Party</h2>
						<p
							class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Meet the special people who will be standing by our side on our special day.
						</p>
					</div>
					<div
						class="grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
					>
						<div class="flex flex-col items-center gap-2">
							<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
								<span class="flex h-full w-full items-center justify-center rounded-full bg-muted"
									>JD</span
								>
							</span>
							<div class="text-center">
								<p class="text-sm font-medium">John Doe</p>
								<p class="text-sm text-muted-foreground">Best Man</p>
							</div>
						</div>
						<div class="flex flex-col items-center gap-2">
							<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
								<span class="flex h-full w-full items-center justify-center rounded-full bg-muted"
									>JA</span
								>
							</span>
							<div class="text-center">
								<p class="text-sm font-medium">Jane Arden</p>
								<p class="text-sm text-muted-foreground">Maid of Honor</p>
							</div>
						</div>
						<div class="flex flex-col items-center gap-2">
							<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
								<span class="flex h-full w-full items-center justify-center rounded-full bg-muted"
									>TS</span
								>
							</span>
							<div class="text-center">
								<p class="text-sm font-medium">Tom Smith</p>
								<p class="text-sm text-muted-foreground">Groomsman</p>
							</div>
						</div>
						<div class="flex flex-col items-center gap-2">
							<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
								<span class="flex h-full w-full items-center justify-center rounded-full bg-muted"
									>ES</span
								>
							</span>
							<div class="text-center">
								<p class="text-sm font-medium">Emily Sato</p>
								<p class="text-sm text-muted-foreground">Bridesmaid</p>
							</div>
						</div>
						<div class="flex flex-col items-center gap-2">
							<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
								<span class="flex h-full w-full items-center justify-center rounded-full bg-muted"
									>RJ</span
								>
							</span>
							<div class="text-center">
								<p class="text-sm font-medium">Ryan Jones</p>
								<p class="text-sm text-muted-foreground">Groomsman</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="w-full py-12 md:py-24 lg:py-32">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Our Wedding Registry</h2>
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
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">RSVP</h2>
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
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
						<p
							class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Have a question or need more information? Get in touch with us.
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
								placeholder="Your Message"
							></textarea>
							<button
								class="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
								type="submit"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer
		class="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6"
	>
		<p class="text-xs text-muted-foreground">© 2024 Charlotte &amp; Peter. All rights reserved.</p>
		<nav class="flex gap-4 sm:ml-auto sm:gap-6">
			<a class="text-xs underline-offset-4 hover:underline" href="#"> Privacy </a>
			<a class="text-xs underline-offset-4 hover:underline" href="#"> Terms </a>
		</nav>
	</footer>
</div>
