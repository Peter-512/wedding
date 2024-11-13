<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	interface Props {
		size?: number;
		textColor?: string;
		backgroundColor?: string;
		date: Date;
	}

	const { size = 1, textColor = 'white', backgroundColor = '#383838', date }: Props = $props();

	const segmentsCount = $derived(4);
	let interval: ReturnType<typeof setInterval>;

	let now = $state(new Date());
	const diff = $derived(Math.abs(date.getTime() - now.getTime()));

	const days = $derived(Math.floor(diff / (1000 * 60 * 60 * 24)));
	const hours = $derived(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
	const minutes = $derived(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
	const seconds = $derived(Math.floor((diff % (1000 * 60)) / 1000));

	/* eslint-disable svelte/valid-compile */
	let display = $state([
		{
			top: days.toString().padStart(3, '0'),
			bottom: days.toString().padStart(3, '0'),
			transition: false
		},
		{
			top: hours.toString().padStart(2, '0'),
			bottom: hours.toString().padStart(2, '0'),
			transition: false
		},
		{
			top: minutes.toString().padStart(2, '0'),
			bottom: minutes.toString().padStart(2, '0'),
			transition: false
		},
		{
			top: seconds.toString().padStart(2, '0'),
			bottom: seconds.toString().padStart(2, '0'),
			transition: false
		}
	]);
	/* eslint-enable svelte/valid-compile */

	$effect(() => {
		interval = setInterval(() => {
			now = new Date();
			const newData: string[] = [];

			newData.push(days.toString().padStart(2, '0'));
			newData.push(hours.toString().padStart(2, '0'));
			newData.push(minutes.toString().padStart(2, '0'));
			newData.push(seconds.toString().padStart(2, '0'));
			display = display.map(({ bottom }, i) => ({
				top: newData[i],
				bottom,
				transition: newData[i] !== bottom
			}));
			setTimeout(
				() =>
					(display = display.map(({ top }, i) => ({
						bottom: newData[i],
						top,
						transition: false
					}))),
				500
			);
		}, 1000);
		return () => interval && clearInterval(interval);
	});
</script>

<div
	class="clock"
	style:width="calc((3ch + 0.5em) * {segmentsCount} + 0.1em * {segmentsCount - 1})"
	style:font-size="{size * 2}em"
	style:--flip-clock-text-color={textColor}
	style:--flip-clock-background-color={backgroundColor}
>
	<div class="overlay">
		{#each display as segment}
			<div class="segment">
				<p class="top" class:transition={segment.transition}>
					<span>
						{segment.bottom}
					</span>
				</p>
				<p class="bottom" class:transition={segment.transition}>
					<span>
						{segment.top}
					</span>
				</p>
			</div>
		{/each}
	</div>
	<div class="base">
		{#each display as segment}
			<div class="segment">
				<p class="top">
					{segment.top}
				</p>
				<p class="bottom">
					{segment.bottom}
				</p>
			</div>
		{/each}
	</div>
	<div class="mt-5 flex max-w-[calc(100%-20px)] justify-between text-center">
		<span class="w-[74px] text-sm">{m.days()}</span>
		<span class="w-[74px] text-sm">{m.hours()}</span>
		<span class="w-[74px] text-sm">{m.minutes()}</span>
		<span class="w-[74px] text-sm">{m.seconds()}</span>
	</div>
</div>

<style>
	.clock {
		position: relative;
		height: 1.51em;
	}
	.base,
	.overlay {
		display: flex;
		gap: 0.1em;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		.bottom {
			transform: scaleY(0);
		}
	}
	.base {
		p {
			border-radius: 0.25em;
		}
	}
	.segment {
		position: relative;
		color: var(--flip-clock-text-color);
		height: 1.51em;
		width: calc(3ch + 0.5em);
		p {
			background: var(--flip-clock-background-color);
			margin: 0;
			width: 3ch;
			text-align: center;
		}
		.top {
			border-radius: 0.25em 0.25em 0 0;
			position: absolute;
			top: 0;
			left: 0;
			margin: 0;
			clip-path: inset(0px 0px 50% 0px);
			&.transition {
				transition: transform 0.25s ease-in;
				transform: scaleY(0);
			}
		}
		.bottom {
			border-radius: 0 0 0.25em 0.25em;
			clip-path: inset(50% 0px 0px 0px);
			top: 0.01em;
			left: 0;
			position: absolute;
			margin: 0;
			&.transition {
				transition: transform 0.25s 0.25s ease-out;
				transform: scale(100%);
			}
		}
	}
</style>
