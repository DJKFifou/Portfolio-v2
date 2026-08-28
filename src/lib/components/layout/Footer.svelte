<script lang="ts">
	import ArrowsCursorCentered from '$lib/components/ArrowsCursorCentered.svelte';
	let actualYear: HTMLSpanElement;
</script>

<footer class="">
	<ArrowsCursorCentered />
	<div
		class="flex flex-col items-center justify-center gap-20 bg-theme-black py-40 text-theme-white"
	>
		<h3 class="font-obviously text-7xl font-black">How to reach me ?</h3>
		<div class="flex items-center gap-8">
			<a href="https://maximelust.fr" class="border bg-theme-white p-2">
				<img src="/src/lib/assets/icons/socketio.svg" alt="" class="h-10 object-contain" />
			</a>
			<a href="https://maximelust.fr" class="border bg-theme-white p-2">
				<img src="/src/lib/assets/icons/react.svg" alt="" class="h-10 object-contain" />
			</a>
			<a href="https://maximelust.fr" class="border bg-theme-white p-2">
				<img src="/src/lib/assets/icons/sass.svg" alt="" class="h-10 object-contain" />
			</a>
		</div>
	</div>
	<div class="flex justify-between bg-theme-black p-4 font-mono text-theme-white uppercase">
		<span class="">Bordeaux · Remote</span>
		<p>©<span bind:this={actualYear}>{actualYear ? '' : '2026'}</span> — All rights reserved</p>
	</div>
</footer>
