<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Marquee from '$lib/components/Marquee.svelte';
	import AboutHome from '$lib/components/AboutHome.svelte';
	import ArrowsCursorCentered from '$lib/components/ArrowsCursorCentered.svelte';
</script>

<!-- <h1>{m.hello_world({ name: 'Prince' })}</h1> -->

<section class="relative h-screen bg-theme-white">
	<img
		src="/src/lib/assets/noise.png"
		alt=""
		class="absolute inset-0 -z-1 h-full w-full opacity-30"
	/>
</section>

<AboutHome />

<Marquee>
	<h2 class="text-10xl pr-50 font-obviously font-black uppercase">{m['homepage.hero.name']()}</h2>
</Marquee>

<ArrowsCursorCentered />
