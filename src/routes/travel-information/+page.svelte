<script>
	import { languageTag } from '$lib/paraglide/runtime.js';
	import { Button } from '$lib/components/ui/button';
	import Image from '$lib/components/Image.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<section class="container">
	<h2>
		{@html m.travel_information()}
	</h2>

	<p class="font-arimo font-thin md:tracking-widest">
		{m.this_muddy_spider_surge()}
	</p>
	<div class="grid grid-cols-[300px,1fr] items-start gap-4">
		<Image>
			<enhanced:img
				alt="Brussels Airport"
				src="../../lib/images/airport.webp"
				class="not-prose overflow-hidden rounded-xl object-cover transition ease-out sm:w-full lg:order-last"
			/>
		</Image>
		<div class="order-first col-span-2 md:order-last md:col-span-1">
			<h3>{m.flying()}</h3>
			<p>{m.small_even_halibut_aid()}</p>
			<ul class="list-disc">
				<li>
					{m.broad_loved_gull_gleam()}
				</li>
				<li>{m.quaint_safe_parakeet_dash()}</li>
				<li>{m.sea_major_cockroach_spur()}</li>
				<li>{m.such_bad_okapi_nudge()}</li>
				<li>{m.patient_cozy_slug_smile()}</li>
			</ul>
		</div>
	</div>

	<div class="grid grid-cols-[1fr,300px] items-start gap-4">
		<div class="col-span-2 md:col-span-1">
			<h3>{m.hotels()}</h3>
			<p>{m.spicy_sunny_jaguar_accept()}</p>
			<ul class="list-disc">
				<li>
					<Button size="inline" variant="link" target="_blank" href="https://www.colonie7.be/"
						>Colonie 7</Button
					>: {m.round_alive_marlin_agree()}
				</li>
				<li>
					<Button size="inline" variant="link" target="_blank" href="https://www.yust.com/antwerp/"
						>Yust</Button
					>: {m.steep_each_quail_boost()}
				</li>
				<li>{m.teary_east_lemming_achieve()}</li>
			</ul>
			<p>{@html m.glamping_info()}</p>
		</div>
		<Image>
			<enhanced:img
				alt="Colonie 7"
				src="../../lib/images/colonie7.png"
				class="not-prose aspect-[3/4] overflow-hidden rounded-xl object-cover transition ease-out sm:w-full lg:order-last"
			/>
		</Image>
	</div>
	<div class="grid grid-cols-[300px,1fr] items-start gap-4">
		<Image>
			<enhanced:img
				alt="De Lijn"
				src="../../lib/images/delijn.jpg"
				class="my-12 overflow-hidden rounded-xl object-cover transition ease-out sm:w-full lg:order-last"
			/>
		</Image>
		<div class="order-first col-span-2 md:order-last md:col-span-1">
			<h3>{m.transport()}</h3>
			<p>
				{m.busy_knotty_grizzly_belong()}
			</p>
			<ul class="list-disc">
				<li>
					<Button
						target="_blank"
						size="inline"
						variant="link"
						href="https://www.delijn.be/{languageTag()}">De Lijn</Button
					>
					{m.red_deft_eel_spark()}
				</li>
				<ul class="list-circle">
					<li>{m.merry_empty_swallow_gasp()}</li>
					<li>{m.patchy_front_horse_bake()}</li>
					<li>{m.major_novel_marmot_zap()}</li>
				</ul>
				<li>
					<Button
						target="_blank"
						size="inline"
						variant="link"
						href="https://www.belgiantrain.be/{languageTag()}">NMBS</Button
					>
					{m.antsy_super_jellyfish_stir()}
				</li>
				<li>
					<Button size="inline" variant="link" href="tel:+32 3 238 38 38"
						>Taxis (+32 3 238 38 38)</Button
					>
					{m.true_cuddly_deer_accept()}
					<Button size="inline" variant="link" target="_blank" href="https://m.uber.com"
						>Uber</Button
					>.
				</li>
			</ul>
		</div>
	</div>
	<h3>{m.general()}</h3>
	<ul class="list-disc">
		<li>{m.topical_cute_seal_cheer()}</li>
		<li>{m.nimble_left_oryx_enrich()}</li>
		<li>
			{m.cozy_gross_jay_aid()}
		</li>
		<li>
			{m.arable_hour_coyote_feel()}
		</li>
		<li>{m.white_actual_squid_pat()}</li>
	</ul>
	<p>
		{@html m.proud_mad_scallop_pave({ favorites: m.favorites() })}
	</p>
</section>

<style>
	@media (max-width: 380px) {
		h2 {
			@apply text-5xl;
		}
	}
</style>
