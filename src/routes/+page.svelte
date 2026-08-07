<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/Hero.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import RandomBinaryNumber from '$lib/components/RandomBinaryNumber.svelte';
	import ArrowsCursorCentered from '$lib/components/ArrowsCursorCentered.svelte';
</script>

<!-- <h1>{m.hello_world({ name: 'Prince' })}</h1> -->

<Hero />
<RandomBinaryNumber />
<div class="pb-4">
	<Marquee classes="-mt-4">
		<h2 class="pr-20 font-obviously text-9xl font-black uppercase">
			{m['homepage.hero.projects']()}
		</h2>
	</Marquee>
	<Marquee direction="right">
		<h2 class="pr-20 font-obviously text-9xl font-black uppercase">
			{m['homepage.hero.projects']()}
		</h2>
	</Marquee>
</div>
<RandomBinaryNumber />
<ArrowsCursorCentered />
