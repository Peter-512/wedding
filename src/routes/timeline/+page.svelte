<script lang="ts">
	import { cls, Timeline, TimelineEvent } from 'svelte-ux';
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
			title: 'Doors open',
			description: 'And so it begins...',
			icon: mdiDoorOpen
		},
		{
			time: '15:00',
			title: 'Ceremony',
			description: "We gettin' married!!!",
			icon: mdiRing
		},
		{
			time: '16:00',
			title: 'Reception',
			description: 'Some snacks and chilling out.',
			icon: mdiGlassCocktail
		},
		{
			time: '18:30',
			title: 'Dinner',
			description: 'Fooooooood',
			icon: mdiSilverwareForkKnife
		},
		{
			time: '21:00',
			title: 'Party',
			description: 'Paaarteeeyyyy',
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
