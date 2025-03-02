<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Redo, Trash2, Undo } from 'lucide-svelte';

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

	// Helper function to get the mouse or touch coordinates relative to the canvas
	function getOffset(event: MouseEvent | TouchEvent) {
		if (!canvas) return { x: 0, y: 0 };
		const rect = canvas.getBoundingClientRect();
		let clientX: number, clientY: number;
		if (event instanceof MouseEvent) {
			clientX = event.clientX;
			clientY = event.clientY;
		} else {
			clientX = event.touches[0].clientX;
			clientY = event.touches[0].clientY;
		}
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

	function startDrawing(event: MouseEvent | TouchEvent) {
		event.preventDefault();
		isDrawing = true;
		const { x, y } = getOffset(event);
		lastX = x;
		lastY = y;
	}

	function draw(event: MouseEvent | TouchEvent) {
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

	function clear() {
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
	function undo() {
		if (history.currentIndex === 0) {
			history.currentIndex--;
			clearCanvas();
			return;
		}
		history.currentIndex--;
		loadHistoryState(currentHistoryEntry);
	}

	// Redo: go forward one step if possible
	function redo() {
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
		context.strokeStyle = '#000';
		context.lineWidth = 2;
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
			onmousedown={startDrawing}
			onmousemove={draw}
			onmouseup={stopDrawing}
			onmouseleave={stopDrawing}
			ontouchstart={startDrawing}
			ontouchmove={draw}
			ontouchend={stopDrawing}
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
		<!-- Clear button positioned in the bottom right, using an icon -->
		<Button variant="icon" onclick={clear} class="absolute bottom-2 right-2">
			<Trash2 />
		</Button>
	</div>
</div>
