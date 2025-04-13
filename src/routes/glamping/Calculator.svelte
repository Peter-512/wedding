<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import * as m from '$lib/paraglide/messages';
	import { toast } from 'svelte-sonner';

	type Offering = {
		what: string;
		price: string;
		notes: string;
	};

	type Props = {
		offerings: Offering[];
	};

	const { offerings }: Props = $props();

	const options = $derived([
		{ ...offerings[0], min: 1, max: 8 },
		{ ...offerings[1], min: 2, max: 4 },
		{ ...offerings[3], price: '€0,00', min: 1, max: null }
	]);

	let accommodation = $state('');
	let linen = $state(false);
	let breakfast = $state(false);
	let people = $state(2);

	const selectedOption = $derived(options.find((o) => o.what === accommodation));

	const linenDisabled = $derived(accommodation === options[2].what);

	let accommodationPrice = $derived.by(() => {
		const selected = options.find((o) => o.what === accommodation);
		return selected ? parseFloat(selected.price.slice(1).replace(',', '.')) : 0;
	});

	let linenPrice = $derived(linen ? 7.5 * people : 0);
	let breakfastPrice = $derived(breakfast ? 20 * people : 0);
	let totalPrice = $derived(accommodationPrice + linenPrice + breakfastPrice);
	let pricePerPerson = $derived(people > 0 ? totalPrice / people : 0);
</script>

<section class="container">
	<h3 class="mb-4 text-2xl font-semibold">{m.calculate_your_price()}</h3>

	<div class="grid gap-6 md:grid-cols-2">
		<div class="flex flex-col gap-4">
			<Select.Root
				type="single"
				bind:value={accommodation}
				onValueChange={() => {
					if (accommodation === options[2].what) {
						linen = false;
					}
					if (selectedOption) {
						if (people < selectedOption.min) {
							people = selectedOption.min;
							toast.warning(m.people_below_min({ min: selectedOption.min }));
						}
						if (selectedOption.max && people > selectedOption.max) {
							people = selectedOption.max;
							toast.warning(m.people_above_max({ max: selectedOption.max }));
						}
					}
				}}
			>
				<Select.Trigger class="w-full">{accommodation || m.select_accommodation()}</Select.Trigger>
				<Select.Content>
					{#each options as { what }}
						<Select.Item value={what}>{what}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>

			<Label class={[linenDisabled && 'text-stone-400', 'flex items-center gap-2']}>
				<Checkbox
					class={[linenDisabled && 'border-stone-400']}
					bind:checked={linen}
					onclick={(e) => {
						if (linenDisabled) {
							e.preventDefault();
							toast.warning(m.cannot_include_linen());
						}
					}}
				/>
				{m.include_linen()}
			</Label>

			<Label class="flex items-center gap-2">
				<Checkbox bind:checked={breakfast} />
				{m.include_breakfast()}
			</Label>

			<Label>
				{m.number_of_people()}
				<Input
					type="number"
					bind:value={people}
					class="mt-1 w-24"
					onchange={() => {
						if (!selectedOption) return;
						if (people < selectedOption.min) {
							people = selectedOption.min;
							toast.warning(m.people_below_min({ min: selectedOption.min }));
						}
						if (selectedOption.max && people > selectedOption.max) {
							people = selectedOption.max;
							toast.warning(m.people_above_max({ max: selectedOption.max }));
						}
					}}
				/>
			</Label>
		</div>

		<Card.Root class="bg-muted/50 p-4 shadow-md">
			<Card.Title>{m.calculation_summary()}</Card.Title>
			<Card.Content class="space-y-2 text-lg">
				<p>{m.total()}: <strong>€{totalPrice.toFixed(2)}</strong></p>
				<p>{m.per_person()}: <strong>€{pricePerPerson.toFixed(2)}</strong></p>
			</Card.Content>
		</Card.Root>
	</div>
</section>
