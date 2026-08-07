<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/Hero.svelte';
	import RandomBinaryNumber from '$lib/components/RandomBinaryNumber.svelte';
	import ArrowsCursorCentered from '$lib/components/ArrowsCursorCentered.svelte';
</script>

<!-- <h1>{m.hello_world({ name: 'Prince' })}</h1> -->

<Hero />
<RandomBinaryNumber />
<ArrowsCursorCentered />
