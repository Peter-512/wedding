<script>
	import { Button } from '$lib/components/ui/button';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import Image from '$lib/components/Image.svelte';
	import * as m from '$lib/paraglide/messages.js';

	const fallbackToEnglishWhenGermanNotAvailable = () => {
		if (languageTag() === 'de') {
			return 'en';
		}
		return languageTag();
	};
</script>

<section class="container">
	<h2>{m.fave_spots()}</h2>
	<div class="grid grid-cols-[1fr,300px] items-start gap-4">
		<div class="col-span-2 md:col-span-1">
			<h3>{m.restaurants()}</h3>

			<ul class="list-disc">
				<li>
					<Button target="_blank" href="https://www.repasse.be/" variant="link" size="inline"
						>Repasse</Button
					>: {m.alert_simple_gadfly_race()}
				</li>
				<li>
					<Button target="_blank" href="https://www.brasseriewoods.be/" variant="link" size="inline"
						>Brasserie Woods
					</Button>: {m.tame_fun_beaver_dart()}
				</li>
				<li>
					<Button target="_blank" href="https://www.depottekijker.be/" variant="link" size="inline"
						>De Pottekijker
					</Button>: {m.soft_ideal_camel_absorb()}
				</li>
				<li>
					<Button
						variant="link"
						size="inline"
						target="_blank"
						href="https://www.holyguacamoly.be/nl/"
						>Holy Guacamoly 🌱
					</Button>: {m.vivid_keen_herring_rise()}
				</li>
				<li>
					<Button variant="link" size="inline" target="_blank" href="https://brasseriedepelgrim.be/"
						>De Pelgrim</Button
					>: {m.proof_crisp_ox_dash()}
				</li>
				<li>
					<Button variant="link" size="inline" target="_blank" href="https://poulepoulette.com/"
						>Poule & Poulette 🌱</Button
					>: {m.sad_free_flamingo_ripple()}
				</li>
				<li>
					<Button variant="link" size="inline" target="_blank" href="https://seoulclubhouse.com/"
						>Seoul Club House</Button
					>: {m.gray_antsy_grebe_hurl()}
				</li>
				<li>
					<Button variant="link" size="inline" target="_blank" href="https://frituurlescluze.be/"
						>Frituur Lescluze 🌱</Button
					>: {m.smart_sleek_tapir_care()}
				</li>
				<li>
					<Button variant="link" size="inline" target="_blank" href="http://www.frieterij.be/"
						>De Friterij 🌱</Button
					>: {m.drab_brave_chipmunk_walk()}
				</li>
			</ul>
			🌱 = {m.topical_left_martin_grow()}
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
			<h3>{m.activities()}</h3>
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
					({m.whole_knotty_giraffe_tear()})
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
					- {m.kmsk()}
				</li>
				<li>{m.noisy_teal_loris_win()}</li>
				<li>Meir ({m.warm_large_angelfish_hush()})</li>
				<li>
					<Button
						variant="link"
						size="inline"
						target="_blank"
						href="https://maps.app.goo.gl/48269UYHjt5kh8Z69"
					>
						Vreemdelingenmarkt Theaterplein
					</Button>
					({m.heavy_cute_dingo_zip()})
				</li>
			</ul>
		</div>
	</div>
	<p class="mx-auto max-w-3xl">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html m.due_mean_cuckoo_greet({ url: `https://www.efteling.com/${languageTag()}` })}
	</p>
	<div class="flex justify-center">
		<div class="w-96">
			<Image displayForMobile={true}>
				<enhanced:img
					alt="Edfteling"
					src="../../lib/images/efteling.jpg"
					class="not-prose mb-8 aspect-square w-96 overflow-hidden rounded-xl object-cover object-top transition ease-out sm:w-full lg:order-last"
				/>
			</Image>
		</div>
	</div>
</section>
