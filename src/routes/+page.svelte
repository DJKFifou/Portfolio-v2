<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/Hero.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import RandomBinaryNumber from '$lib/components/RandomBinaryNumber.svelte';
</script>

<!-- <h1>{m.hello_world({ name: 'Prince' })}</h1> -->

<Hero />
<RandomBinaryNumber />
<div class="pb-2 lg:pb-4">
	<Marquee classes="lg:-mt-4">
		<h2 class="pr-8 font-obviously text-3xl font-black uppercase md:text-6xl lg:text-9xl">
			{m['homepage.hero.role']()}
		</h2>
	</Marquee>
	<Marquee direction="right">
		<h2 class="pr-8 font-obviously text-3xl font-black uppercase md:text-6xl lg:text-9xl">
			{m['homepage.hero.role']()}
		</h2>
	</Marquee>
</div>
<RandomBinaryNumber />
