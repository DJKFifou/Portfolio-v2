<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import ArrowsCursorCentered from '$lib/components/ArrowsCursorCentered.svelte';
</script>

<footer class="">
	<ArrowsCursorCentered />
	<div
		class="flex flex-col items-center justify-center gap-20 bg-theme-black py-40 text-theme-white"
	>
		<h3 class="font-obviously text-7xl font-black">{m['footer.reach_me']()}</h3>
		<div class="flex items-center gap-8">
			<a href="https://github.com/DJKFifou" class="bg-white p-2" target="_blank" rel="noreferrer">
				<img src="/src/lib/assets/icons/github.svg" alt="" class="h-10 object-contain" />
			</a>
			<a
				href="https://www.linkedin.com/in/maxime-lust/"
				class="bg-white p-2"
				target="_blank"
				rel="noreferrer"
			>
				<img src="/src/lib/assets/icons/linkedin.svg" alt="" class="h-10 object-contain" />
			</a>
			<a href="mailto:lust.maxime@outlook.fr" class="bg-white p-2">
				<img src="/src/lib/assets/icons/gmail.svg" alt="" class="h-10 object-contain" />
			</a>
		</div>
	</div>
	<div class="flex justify-between bg-theme-black p-4 font-mono text-theme-white uppercase">
		<p>France · Bordeaux · {m['footer.remote']()}</p>
		<p>©{new Date().getFullYear()} — {m['footer.copyright']()}</p>
	</div>
</footer>
