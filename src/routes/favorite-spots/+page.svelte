<script>
	import { Button } from '$lib/components/ui/button';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import Image from '$lib/components/Image.svelte';
	import { Tilt } from 'svelte-ux';
	import repasse from '$lib/images/repasse.jpg';

	const fallbackToEnglishWhenGermanNotAvailable = () => {
		if (languageTag() === 'de') {
			return 'en';
		}
		return languageTag();
	};
</script>

<section class="container">
	<h2>Favorite spots</h2>
	<div class="grid grid-cols-[1fr,300px] items-start gap-4">
		<div class="col-span-2 md:col-span-1">
			<h3>Restaurants</h3>

			<ul class="list-disc">
				<li>
					<Button target="_blank" href="https://www.repasse.be/" variant="link" size="inline"
						>Repasse</Button
					>: Classic Belgian dishes, of which a few are offered "en repasse", which means you can
					get a second round if you're still hungry!
				</li>
				<li>
					<Button target="_blank" href="https://www.brasseriewoods.be/" variant="link" size="inline"
						>Brasserie Woods
					</Button>: Cozy, with a big menu, located in the woods!
				</li>
				<li>
					<Button target="_blank" href="https://www.depottekijker.be/" variant="link" size="inline"
						>De Pottekijker
					</Button>: In the city center, small and cozy and with big portions and tasty dishes.
				</li>
				<li>
					<Button
						variant="link"
						size="inline"
						target="_blank"
						href="https://www.holyguacamoly.be/nl/"
						>Holy Guacamoly 🌱
					</Button>: For more on the go, burrito bowls, taco's and all the good stuff.
				</li>
				<li>
					<Button variant="link" size="inline" target="_blank" href="https://brasseriedepelgrim.be/"
						>De Pelgrim</Button
					>: Across from the Brewery right around our corner. Especially a tip for those that like
					beer
				</li>
				<li>
					<Button variant="link" size="inline" target="_blank" href="https://poulepoulette.com/"
						>Poule & Poulette 🌱</Button
					>: Really good chicken with plenty of vegan options.
				</li>
				<li>
					<Button variant="link" size="inline" target="_blank" href="https://seoulclubhouse.com/"
						>Seoul Club House</Button
					>: Recently opened, Korean food and drinks with Karaoke and Pool tables upstairs.
				</li>
				<li>
					<Button variant="link" size="inline" target="_blank" href="https://frituurlescluze.be/"
						>Frituur Lescluze 🌱</Button
					>: You can't visit Belgium and not go to a "Frituur". It's like getting Schnitzel in
					Austria. Frituurs sell fries and meat (or vegan) dishes to go with the fries. They also
					have a bunch of sauces to go along with it. Our recommendations are frieten met
					satekruiden, mini lucifers, kippets and some stoofvleessaus and onions on the side. Also
					try the curryworst (special), viandel, bitterballen and kippenvleugeltjes.
				</li>
				<li>
					<Button variant="link" size="inline" target="_blank" href="http://www.frieterij.be/"
						>De Friterij 🌱</Button
					>: Homemade Frituur, less options but really good quality.
				</li>
			</ul>
			🌱 = offers vegan options
		</div>
		<div class="flex h-full flex-col justify-evenly">
			<Image>
				<enhanced:img
					alt="Dinner at Repasse"
					src="../../lib/images/repasse.jpg"
					class="not-prose overflow-hidden rounded-xl object-cover transition ease-out sm:w-full lg:order-last"
				/>
			</Image>
			<Image>
				<enhanced:img
					alt="Frituur Lescluze"
					src="../../lib/images/frituur.jpg"
					class="not-prose overflow-hidden rounded-xl object-cover transition ease-out sm:w-full lg:order-last"
				/>
			</Image>
		</div>
	</div>

	<div class="grid grid-cols-[300px,1fr] items-start gap-4">
		<div class="mt-12 flex flex-col gap-8">
			<Image>
				<enhanced:img
					alt="Escape room"
					src="../../lib/images/escape-room.jpg"
					class="not-prose overflow-hidden rounded-xl object-cover transition ease-out sm:w-full lg:order-last"
				/>
			</Image>
			<Image>
				<enhanced:img
					alt="Market"
					src="../../lib/images/market.jpg"
					class="not-prose overflow-hidden rounded-xl object-cover transition ease-out sm:w-full lg:order-last"
				/>
			</Image>
		</div>
		<div class="col-span-2 md:col-span-1">
			<h3>Activities</h3>
			<ul class="list-disc">
				<li>
					<Button variant="link" size="inline" target="_blank" href="https://kraakfabriek.be/"
						>Kraakfabriek</Button
					>
				</li>
				<li>
					<Button
						variant="link"
						size="inline"
						target="_blank"
						href="https://gamestate.com/pages/antwerp">UGC Bowling & Arcade</Button
					>
				</li>
				<li>
					<Button
						variant="link"
						size="inline"
						target="_blank"
						href="https://mas.be/{languageTag()}"
					>
						MAS - Museum aan de Stroom
					</Button>
					(first place we ever visited together!)
				</li>
				<li>
					<Button
						variant="link"
						size="inline"
						target="_blank"
						href="https://kmska.be/{fallbackToEnglishWhenGermanNotAvailable()}/homepage"
					>
						KMSK
					</Button>
					- Koninklijk Museum voor Schone Kunsten Antwerpen
				</li>
				<li>Antwerp Central Station: The most beautiful train station in the world.</li>
				<li>Meir (for shopping)</li>
				<li>
					<Button
						variant="link"
						size="inline"
						target="_blank"
						href="https://maps.app.goo.gl/48269UYHjt5kh8Z69"
					>
						Vreemdelingenmarkt on Theaterplein
					</Button>
					(Saturday and Sunday)
				</li>
			</ul>
		</div>
	</div>
	<p class="mx-auto max-w-3xl">
		As our final tip, we recommend the <Button
			variant="link"
			size="inline"
			target="_blank"
			href="https://www.efteling.com/{languageTag()}"
		>
			Efteling
		</Button>, a fairytale theme park in the Netherlands. It's about a one hour drive from Antwerp
		and is a magical place for all and really a must-visit if you get the chance.
	</p>
	<div class="flex justify-center">
		<div class="w-96">
			<Image displayForMobile={true}>
				<enhanced:img
					alt="Edfteling"
					src="../../lib/images/efteling.jpg"
					class="not-prose mb-8 aspect-square w-96 overflow-hidden rounded-xl object-cover transition ease-out sm:w-full lg:order-last"
				/>
			</Image>
		</div>
	</div>
</section>
