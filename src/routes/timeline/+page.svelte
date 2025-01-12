<script lang="ts">
	import { cls, Timeline, TimelineEvent } from 'svelte-ux';
	import * as m from '$lib/paraglide/messages';
	import {
		mdiSilverwareForkKnife,
		mdiPartyPopper,
		mdiRing,
		mdiGlassCocktail,
		mdiDoorOpen
	} from '@mdi/js';

	type TimelineEntry = {
		time: `${number}:${number}`;
		title: string;
		description: string;
		icon: string;
	};

	const data: TimelineEntry[] = [
		{
			time: '14:30',
			title: m.doors_open_title(),
			description: m.doors_open(),
			icon: mdiDoorOpen
		},
		{
			time: '15:00',
			title: m.ceremony_title(),
			description: m.ceremony(),
			icon: mdiRing
		},
		{
			time: '16:00',
			title: m.reception_title(),
			description: m.reception(),
			icon: mdiGlassCocktail
		},
		{
			time: '18:30',
			title: m.dinner_title(),
			description: m.dinner(),
			icon: mdiSilverwareForkKnife
		},
		{
			time: '21:00',
			title: m.party_title(),
			description: m.party(),
			icon: mdiPartyPopper
		}
	];
</script>

<Timeline vertical snapPoint>
	{#each data as { icon, title, time, description }, i}
		<TimelineEvent
			{icon}
			start={i % 2 === 0}
			end={i % 2 !== 0}
			classes={{
				root: cls(i % 2 === 0 && 'text-end', 'not-prose'),
				icon: 'size-5'
			}}
		>
			<div class="mx-2 mb-10 mt-0.5">
				<time class="font-mono italic">{time}</time>
				<div class="text-lg font-black">{title}</div>
				<div class="text-sm text-muted-foreground">
					{description}
				</div>
			</div>
		</TimelineEvent>
	{/each}
</Timeline>
