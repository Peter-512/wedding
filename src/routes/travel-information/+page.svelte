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
	<p>You have a few options to travel to Antwerp:</p>
	<ul class="list-disc">
		<li>
			Brussels Airport: 30 mins by train to Antwerp City Center (Austrian Airlines & Brussels
			Airlines)
		</li>
		<li>Eindhoven Airpot: 2 hours by bus & train to Antwerp City Center (Ryanair)</li>
		<li>Charleroi Airport: 2,5 hours by bus & train to Antwerp City Center (Ryanair)</li>
		<li>Train: NightJet to Brussels (35 min train ride to Antwerp)</li>
		<li>Car: if you're more the road trip type, it's 1100km from Vienna to Antwerp ;)</li>
	</ul>
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
			> for trams and busses.
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
		<li>
			Taxis are also an option, you can call one at
			<Button size="inline" variant="link" href="tel:+32 3 238 38 38">+32 3 238 38 38</Button>
			or get an <Button size="inline" variant="link" target="_blank" href="https://m.uber.com"
				>Uber</Button
			>.
		</li>
	</ul>
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
