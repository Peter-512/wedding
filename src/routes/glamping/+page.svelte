<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import { languageTag } from '$lib/paraglide/runtime';

	const offeringsEnglish = [
		{
			what: 'Guest tipi for 8 people',
			price: '€135.00',
			notes:
				"Incl. 8 air mattresses. Also possible with 2 cabines for more privacy, then it's only suitable for 2x2 people."
		},
		{
			what: 'Guest tipi for 2-4 people',
			price: '€115.00',
			notes: 'Incl. air mattresses.'
		},
		{
			what: 'Linen',
			price: '€7.50',
			notes: 'Per person.'
		},
		{
			what: 'Bring your own tent + linen',
			price: 'FREE',
			notes: 'You can also choose to bring your own tent and linen.'
		},
		{
			what: 'Breakfast',
			price: '€20.00',
			notes:
				'Price per person: 1 croissant, pistolets, breads, assortment of toppings, koffiekoek. Warm drinks (coffee, tea), water and juice.'
		}
	];

	const offeringsDutch = [
		{
			what: 'Gastentipi 8 personen',
			price: '€135,00',
			notes:
				'Incl. 8 luchtbedden. Kan ook met 2 cabines voor meer privacy, dan is hij geschikt voor 2x2 personen.'
		},
		{
			what: "Gastentipi's 2-4 personen",
			price: '€115,00',
			notes: 'Incl. luchtbedden.'
		},
		{
			what: 'Beddengoed',
			price: '€7,50',
			notes: 'Per persoon.'
		},
		{
			what: 'Eigen tent + beddengoed',
			price: 'GRATIS',
			notes: 'Je kan er ook voor kiezen om je eigen tent en beddengoed mee te nemen.'
		},
		{
			what: 'Ontbijt',
			price: '€20,00',
			notes:
				'Prijs per persoon: 1 croissant, pistolets, sandwiches, assortiment beleg, koffiekoek. Warme dranken, water en fruitsap.'
		}
	];

	const offeringsGerman = [
		{
			what: 'Gästezelt für 8 Personen',
			price: '€135,00',
			notes:
				'Inkl. 8 Luftmatratzen. Kann auch in 2 Kabinen für mehr Privatsphäre unterteilt werden, sodass es für 2x2 Personen geeignet ist.'
		},
		{
			what: 'Gästezelt für 2-4 Personen',
			price: '€115,00',
			notes: 'Inkl. Luftmatratzen.'
		},
		{
			what: 'Bettwäsche',
			price: '€7,50',
			notes: 'Preis pro Person.'
		},
		{
			what: 'Eigenes Zelt + Bettwäsche',
			price: 'KOSTENLOS',
			notes: 'Du kannst auch dein eigenes Zelt und Bettwäsche mitbringen.'
		},
		{
			what: 'Frühstück',
			price: '€20,00',
			notes:
				'Preis pro Person: 1 Croissant, Brötchen, Sandwiches, verschiedene Aufschnitte, Gebäck. Heiße Getränke, Wasser und Orangensaft.'
		}
	];

	const allOfferings = {
		en: offeringsEnglish,
		nl: offeringsDutch,
		de: offeringsGerman
	};

	const offerings = allOfferings[languageTag()];

	const exampleEnglish = [
		{
			what: 'Guest tipi for 2 people',
			price: '€115,00',
			notes: ''
		},
		{
			what: 'Linen',
			price: '€15,00',
			notes: '2 people'
		},
		{
			what: 'Breakfast',
			price: '€40,00',
			notes: '2 people'
		}
	];

	const exampleDutch = [
		{
			what: 'Gastentipi voor 2 personen',
			price: '€115,00',
			notes: ''
		},
		{
			what: 'Beddengoed',
			price: '€15,00',
			notes: '2 personen'
		},
		{
			what: 'Ontbijt',
			price: '€40,00',
			notes: '2 personen'
		}
	];

	const exampleGerman = [
		{
			what: 'Gästezelt für 2 Personen',
			price: '€115,00',
			notes: ''
		},
		{
			what: 'Bettwäsche',
			price: '€15,00',
			notes: '2 Personen'
		},
		{
			what: 'Frühstück',
			price: '€40,00',
			notes: '2 Personen'
		}
	];

	const allExamples = {
		en: exampleEnglish,
		nl: exampleDutch,
		de: exampleGerman
	};

	const examples = allExamples[languageTag()];

	const allTotals = {
		en: {
			what: 'Total',
			price: '€170,00',
			notes: '€85,00 per person'
		},
		nl: {
			what: 'Totaal',
			price: '€170,00',
			notes: '€85,00 per persoon'
		},
		de: {
			what: 'Gesamt',
			price: '€170,00',
			notes: '€85,00 pro Person'
		}
	};

	const totals = allTotals[languageTag()];
</script>

<section class="container">
	<h2>{m.glamping()}</h2>
	<p>PLACEHOLDER TEXT</p>

	<Table.Root class="font-freeserif mb-20 tracking-widest">
		<Table.Caption>{m.overview_caption()}</Table.Caption>
		<Table.Header class="bg-primary/80">
			<Table.Row>
				<Table.Head>{m.what()}</Table.Head>
				<Table.Head class="text-right">{m.price()}</Table.Head>
				<Table.Head>{m.notes()}</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each offerings as { what, notes, price }}
				<Table.Row>
					<Table.Cell>{what}</Table.Cell>
					<Table.Cell class="text-right">{price}</Table.Cell>
					<Table.Cell>{notes}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>

	<Table.Root class="font-freeserif tracking-widest">
		<Table.Caption>{m.example_caption()}</Table.Caption>
		<Table.Header class="bg-primary/80">
			<Table.Row>
				<Table.Head>{m.what()}</Table.Head>
				<Table.Head class="text-right">{m.price()}</Table.Head>
				<Table.Head>{m.notes()}</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each examples as { what, notes, price }}
				<Table.Row>
					<Table.Cell>{what}</Table.Cell>
					<Table.Cell class="text-right">{price}</Table.Cell>
					<Table.Cell>{notes}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
		<Table.Footer>
			<Table.Row>
				<Table.Cell>{totals.what}</Table.Cell>
				<Table.Cell class="text-right">{totals.price}</Table.Cell>
				<Table.Cell>{totals.notes}</Table.Cell>
			</Table.Row>
		</Table.Footer>
	</Table.Root>
</section>
