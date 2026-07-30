<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Marquee from '$lib/components/Marquee.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ArrowsCursorCentered from '$lib/components/ArrowsCursorCentered.svelte';
</script>

<!-- <h1>{m.hello_world({ name: 'Prince' })}</h1> -->

<Hero />

<Marquee>
	<h2 class="pr-50 font-obviously text-10xl font-black uppercase">{m['homepage.hero.name']()}</h2>
</Marquee>

<ArrowsCursorCentered />
