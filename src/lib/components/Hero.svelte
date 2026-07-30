<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	const title = m['homepage.hero.name']();
	const titleLetters = title.split('');
</script>

<section class="relative flex h-screen items-center justify-center bg-theme-white">
	<img
		src="/src/lib/assets/noise.png"
		alt=""
		class="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-30"
	/>
	<div class="flex items-center justify-center text-center">
		<h1
			class=":relative::block:flex :h-[10vw]::-translate-y-[calc(100%+0.5vw)]:flex-col :align-top:leading-none ::transition-transform ::duration-500 ::ease-in-out relative flex font-obviously
            text-[10vw] font-bold uppercase *:overflow-hidden"
		>
			{#each titleLetters as letter, index (index)}
				<div>
					<span>{letter}</span>
					<span>{letter}</span>
					<span>{letter}</span>
				</div>
			{/each}
		</h1>
	</div>
</section>
