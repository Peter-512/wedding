<script lang="ts">
	import { cls, Timeline, TimelineEvent } from 'svelte-ux';
	import * as m from '$lib/paraglide/messages';
	import Autoplay from 'embla-carousel-autoplay';
	import { MediaQuery } from 'svelte/reactivity';
	import {
		mdiSilverwareForkKnife,
		mdiPartyPopper,
		mdiRing,
		mdiGlassCocktail,
		mdiDoorOpen,
		mdiTent
	} from '@mdi/js';
	import { Carousel, Content, Item, Previous, Next } from '$lib/components/ui/carousel/index.js';
	import CarouselItem from './Carouseltem.svelte';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context';

	const isDesktop = new MediaQuery('(min-width: 768px)');

	let api = $state<CarouselAPI>();
	let current = $state(0);
	const count = $derived(api ? api.scrollSnapList().length : 0);

	$effect(() => {
		if (api) {
			current = api.selectedScrollSnap();
			api.on('select', () => {
				current = api!.selectedScrollSnap();
			});
		}
	});

	type TimelineEntry = {
		time: `${number}:${number}`;
		title: string;
		icon: string;
	};

	const data: TimelineEntry[] = [
		{
			time: '14:30',
			title: m.doors_open_title(),
			icon: mdiDoorOpen
		},
		{
			time: '15:00',
			title: m.ceremony_title(),
			icon: mdiRing
		},
		{
			time: '16:00',
			title: m.reception_title(),
			icon: mdiGlassCocktail
		},
		{
			time: '18:00',
			title: m.dinner_title(),
			icon: mdiSilverwareForkKnife
		},
		{
			time: '20:00',
			title: m.party_title(),
			icon: mdiPartyPopper
		},
		{
			time: '02:00',
			title: m.end(),
			icon: mdiTent
		}
	];
</script>

<section class="container">
	<h2>{m.timeline()}</h2>
	<div
		class="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-center md:gap-8 md:pr-16"
	>
		<Timeline vertical snapPoint>
			{#each data as { icon, title, time }, i}
				<TimelineEvent
					{icon}
					start={i % 2 === 0}
					end={i % 2 !== 0}
					classes={{
						root: cls(i % 2 === 0 && 'text-end', 'not-prose'),
						icon: 'size-5'
					}}
				>
					<div class="mx-2 -mt-1 mb-10">
						<time class="font-mono italic">{time}</time>
						<div class="font-freeserif text-lg tracking-widest">{title}</div>
					</div>
				</TimelineEvent>
			{/each}
		</Timeline>
		<Carousel
			setApi={(emblaApi) => (api = emblaApi)}
			plugins={[
				Autoplay({
					delay: 3500
				})
			]}
			opts={{ loop: true }}
			class="w-full max-w-sm"
		>
			<Content class="not-prose -ml-1">
				<CarouselItem>
					<enhanced:img class="rounded-lg" src="../../lib/images/black-and-white.jpg" />
				</CarouselItem>
				<CarouselItem>
					<enhanced:img class="rounded-lg" src="../../lib/images/cool.jpg" />
				</CarouselItem>
				<CarouselItem>
					<enhanced:img class="rounded-lg" src="../../lib/images/sweet.jpg" />
				</CarouselItem>
				<CarouselItem>
					<enhanced:img class="rounded-lg" src="../../lib/images/hands2.jpg" />
				</CarouselItem>
				<CarouselItem>
					<enhanced:img class="rounded-lg" src="../../lib/images/in-love.jpg" />
				</CarouselItem>
				<CarouselItem>
					<enhanced:img class="rounded-lg" src="../../lib/images/looking-at-each-other.jpg" />
				</CarouselItem>
				<CarouselItem>
					<enhanced:img class="rounded-lg" src="../../lib/images/ring.jpg" />
				</CarouselItem>
			</Content>
			{#if isDesktop.current}
				<Previous />
				<Next />
			{/if}
			<div class="flex justify-center gap-1">
				{#each { length: count } as _, i}
					<button
						aria-label="Go to slide {i + 1}"
						class="h-2 w-2 rounded-full bg-accent {current === i ? 'opacity-100' : 'opacity-50'}"
						onclick={() => api?.scrollTo(i)}
					></button>
				{/each}
			</div>
		</Carousel>
	</div>
</section>
