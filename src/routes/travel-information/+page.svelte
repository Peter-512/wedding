<script>
	import { languageTag } from '$lib/paraglide/runtime.js';
	import { Button } from '$lib/components/ui/button';
</script>

<section class="container">
	<h2>Travel information</h2>

	<p>
		This page is for our dear internationals, traveling to Belgium. We hope this information is
		useful for you to easily find your way over here.
	</p>
	<h3>Flying</h3>
	<p>
		When flying to Belgium, you will most likely want to land at Brussels Airport (Zaventem) and use
		the train to get to Antwerp. The train station is located in the airport itself, and you can
		take a direct train to Antwerp. The train ride takes about 30 minutes. For this option you will
		most likely fly with either Brussels Airlines or Austrian Airlines (if you're joining us from
		Austria).
	</p>
	<p>
		A cheaper option is to fly with Ryanair to either Eindhoven Airport (~1.5 hours to Antwerp) or
		Charleroi South Airport (~2 hours to Antwerp). Alternatively, you could also take the NightJet
		to Antwerp Central.
	</p>
	<h3>Hotels</h3>
	<p>If you're looking for a place to stay in Antwerp, we recommend the following hotels:</p>
	<ul class="list-disc">
		<li>
			<Button size="inline" variant="link" target="_blank" href="https://www.colonie7.be/"
				>Colonie 7</Button
			>: Right across from the venue.
		</li>
		<li>
			<Button size="inline" variant="link" target="_blank" href="https://www.yust.com/antwerp/"
				>Yust</Button
			>: Close to our apartment and the city center.
		</li>
		<li>AirBnB and other options...</li>
	</ul>
	<h3>Transport</h3>
	<p>
		Antwerp has a decent public transport system, although it's best to calculate some extra time as
		it can be a bit unreliable.
	</p>
	<ul class="list-disc">
		<li>
			<Button
				target="_blank"
				size="inline"
				variant="link"
				href="https://www.delijn.be/{languageTag()}">De Lijn</Button
			> for Trams and Busses.
		</li>
		<ul class="list-circle">
			<li>A single ticket costs 2.40€ and is valid for 1 hour.</li>
			<li>You can buy a day ticket for 7.50€.</li>
			<li>There are also 10-ride tickets available for 17€ via the app.</li>
		</ul>
		<li>
			<Button
				target="_blank"
				size="inline"
				variant="link"
				href="https://www.belgiantrain.be/{languageTag()}">NMBS</Button
			> for trains, including the international trains to nearby cities, such as Brussels, Mechelen,
			Gent or the beach (Oostende is our favorite).
		</li>
	</ul>
	<p>
		Taxis are also a good option, you can call one at
		<Button size="inline" variant="link" href="tel:+32 3 238 38 38">+32 3 238 38 38</Button>
		or get an <Button size="inline" variant="link" target="_blank" href="https://m.uber.com"
			>Uber</Button
		>.
	</p>
	<h3>General</h3>
	<ul class="list-disc">
		<li>Please make sure to bring your passport or ID card.</li>
		<li>Paying by card is encouraged by almost all places and preferred to cash payments.</li>
		<li>
			There are a lot of bikers in Antwerp, like a lot. Please make sure you never walk on the bike
			paths. You can recognize them because they are often marked red, or because there's a stripe
			on the street between pedestrians and bike paths. When crossing the street, always check for
			bikes before crossing.
		</li>
		<li>
			The main language in Antwerp is Dutch, but most people also speak English. When you go more
			south (to Brussels) you will hear more French as well.
		</li>
		<li>If you have any questions or need help, don't hesitate to contact us!</li>
	</ul>
	<p>
		If you're planning to stay in Belgium for a little longer we have collected some of our favorite
		places to visit and activities to do in Antwerp which you can find
		<Button size="inline" variant="link" href="/favorite-spots">here</Button>.
	</p>
</section>
