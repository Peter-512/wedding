<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Ellipsis, Redo, Trash2, Undo, X } from 'lucide-svelte';
	import { trapFocus } from './actions.svelte';
	import { Slider } from '$lib/components/ui/slider';
	import * as m from '$lib/paraglide/messages';

	type Props = {
		setImgUrl: (url: string | null) => void;
	};
	type History = {
		entries: string[];
		currentIndex: number;
	};

	let { setImgUrl }: Props = $props();

	let canvas = $state<HTMLCanvasElement>();
	let context: CanvasRenderingContext2D | null = $state(null);
	let isDrawing = $state(false);
	let lastX = $state(0);
	let lastY = $state(0);
	let history = $state<History>({
		entries: [],
		currentIndex: -1
	});
	const currentHistoryEntry = $derived(history.entries[history.currentIndex] ?? null);
	let showMenu = $state(false);

	const colors = [
		'red',
		'orange',
		'yellow',
		'green',
		'blue',
		'indigo',
		'violet',
		'white',
		'black'
	] as const;
	let selectedColor = $state<(typeof colors)[number]>('black');
	let size = $state(2);

	// Helper function to get the mouse or touch coordinates relative to the canvas
	function getOffset(event: PointerEvent) {
		if (!canvas) return { x: 0, y: 0 };
		const rect = canvas.getBoundingClientRect();
		const { clientY, clientX } = event;
		// Scale coordinates to the canvas coordinate system
		const x = (clientX - rect.left) * (canvas.width / rect.width);
		const y = (clientY - rect.top) * (canvas.height / rect.height);
		return { x, y };
	}

	export function reset() {
		history = {
			entries: [],
			currentIndex: -1
		};
		clearCanvas();
	}

	function startDrawing(event: PointerEvent) {
		event.preventDefault();
		isDrawing = true;
		const { x, y } = getOffset(event);
		lastX = x;
		lastY = y;
	}

	function draw(event: PointerEvent) {
		event.preventDefault();
		if (!isDrawing || !context) return;
		const { x, y } = getOffset(event);
		context.beginPath();
		context.moveTo(lastX, lastY);
		context.lineTo(x, y);
		context.stroke();
		lastX = x;
		lastY = y;
	}

	function addHistoryEntry(newState: string) {
		// If we've undone some steps, remove any forward history:
		if (history.currentIndex < history.entries.length - 1) {
			history.entries = history.entries.slice(0, history.currentIndex + 1);
		}
		// Only push if the new state is different from the current one
		if (history.currentIndex === -1 || newState !== history.entries[history.currentIndex]) {
			history.entries.push(newState);
			history.currentIndex++;
		}
	}

	function stopDrawing() {
		if (!isDrawing || !canvas) return;
		isDrawing = false;
		// Optionally update the signature image data after drawing ends
		const newState = canvas.toDataURL();
		setImgUrl(newState);
		addHistoryEntry(newState);
	}

	function clearCanvas() {
		if (!canvas || !context) return;
		context.clearRect(0, 0, canvas.width, canvas.height);
		setImgUrl(null);
	}

	function clear(e: MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
		if (!canvas) return;
		clearCanvas();
		const img = canvas.toDataURL();
		addHistoryEntry(img);
	}

	// Load a state from history onto the canvas
	function loadHistoryState(dataUrl: string) {
		const img = new Image();
		img.onload = () => {
			if (!context || !canvas) return;
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(img, 0, 0, canvas.width, canvas.height);
			setImgUrl(dataUrl);
		};
		img.src = dataUrl;
	}

	// Undo: go back one step if possible
	function undo(e: MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
		if (history.currentIndex === 0) {
			history.currentIndex--;
			clearCanvas();
			return;
		}
		history.currentIndex--;
		loadHistoryState(currentHistoryEntry);
	}

	// Redo: go forward one step if possible
	function redo(e: MouseEvent) {
		e.preventDefault();
		e.stopPropagation();
		if (history.currentIndex < history.entries.length - 1) {
			history.currentIndex++;
			loadHistoryState(currentHistoryEntry);
		}
	}

	$effect(() => {
		if (!canvas) return;

		context = canvas.getContext('2d');
		if (!context) return;
		// Set drawing properties (you can adjust these as needed)
		context.strokeStyle = selectedColor;
		context.lineWidth = size;
		context.lineCap = 'round';
	});
</script>

<div class="flex flex-col space-y-4">
	<!-- Signature canvas container with relative positioning -->
	<div class="relative overflow-hidden rounded border border-gray-300">
		<canvas
			bind:this={canvas}
			width="400"
			height="200"
			class="h-full w-full touch-none"
			onpointerdown={startDrawing}
			onpointermove={draw}
			onpointerup={stopDrawing}
			onpointercancel={stopDrawing}
			onpointerleave={stopDrawing}
		></canvas>

		<Button
			variant="icon"
			onclick={undo}
			class="absolute bottom-2 left-2"
			disabled={history.currentIndex === -1}
		>
			<Undo />
		</Button>

		<Button
			variant="icon"
			onclick={redo}
			class="absolute bottom-2 left-14"
			disabled={history.entries.length === history.currentIndex + 1}
		>
			<Redo />
		</Button>

		<Button
			variant="icon"
			onclick={() => (showMenu = !showMenu)}
			class="absolute bottom-2 right-14"
		>
			{#if showMenu}
				<X />
			{:else}
				<Ellipsis />
			{/if}
		</Button>

		<Button variant="icon" onclick={clear} class="absolute bottom-2 right-2">
			<Trash2 />
		</Button>

		{#if showMenu}
			<div
				role="presentation"
				class="modal-background"
				onclick={(event) => {
					if (event.target === event.currentTarget) {
						showMenu = false;
					}
				}}
				onkeydown={(e) => {
					if (e.key === 'Escape') {
						showMenu = false;
					}
				}}
			>
				<div class="menu" use:trapFocus>
					<div class="colors">
						{#each colors as color}
							<button
								class={['color', selectedColor === color ? 'ring-4 ring-offset-2' : '']}
								aria-label={color}
								aria-current={selectedColor === color}
								style="--color: {color}"
								onclick={() => {
									selectedColor = color;
								}}
							></button>
						{/each}
					</div>

					<label class="gap-4">
						{m.small()}
						<Slider
							{size}
							type="single"
							bind:value={size}
							min={1}
							max={50}
							step={1}
							class="max-w-[70%]"
						/>
						{m.large()}
					</label>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	:global(*) {
		touch-action: manipulation;
	}

	.modal-background {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(20px);
	}

	.menu {
		position: relative;
		background: var(--bg-2);
		width: calc(100% - 2em);
		max-width: 28em;
		padding: 1em 1em 0.5em 1em;
		border-radius: 1em;
		box-sizing: border-box;
		user-select: none;
	}

	.colors {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(9, 1fr);
		grid-gap: 0.5em;
	}

	.color {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: none;
		filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
		transition: all 0.1s;
	}

	.menu label {
		display: flex;
		width: 100%;
		margin: 1em 0 0 0;
	}
</style>
