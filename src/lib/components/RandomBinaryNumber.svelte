<script lang="ts">
	import { onMount } from 'svelte';

	const ArraysLength = 16;

	let containerWidth: number = $state(0);
	let arrayWidth: number = $state(0);
	let viewportWidth: number = $state(0);

	let arrayNumbers = $derived(
		viewportWidth >= 1280 ? 8 : viewportWidth >= 1024 ? 6 : viewportWidth >= 768 ? 4 : 3
	);

	let numbers = $state<number[][]>([]);

	function generateArrays() {
		numbers = Array.from({ length: arrayNumbers }, () =>
			Array.from({ length: ArraysLength }, () => Math.round(Math.random()))
		);
	}

	let arraysWidth = $derived(arrayNumbers * arrayWidth);

	let availableWidth = $derived(Math.max(0, containerWidth - arraysWidth - 16));

	let separatorWidth = $derived(availableWidth / Math.max(1, arrayNumbers - 1));

	const slashWidth = 4.4;

	let slashCount = $derived(Math.max(0, Math.floor(separatorWidth / slashWidth)));

	let slashes = $derived('/'.repeat(slashCount));

	onMount(() => {
		viewportWidth = window.innerWidth;
		generateArrays();

		const resize = () => {
			const oldCount = arrayNumbers;
			viewportWidth = window.innerWidth;

			if (oldCount !== arrayNumbers) {
				generateArrays();
			}
		};

		window.addEventListener('resize', resize);

		const interval = setInterval(() => {
			for (let i = 0; i < numbers.length; i++) {
				for (let j = 0; j < numbers[i].length; j++) {
					numbers[i][j] = Math.round(Math.random());
				}
			}
		}, 100);

		return () => {
			window.removeEventListener('resize', resize);
			clearInterval(interval);
		};
	});
</script>

<section
	bind:clientWidth={containerWidth}
	class="flex justify-around gap-4 border-y border-theme-black bg-theme-white p-2 font-mono text-3xs text-theme-black"
>
	{#each numbers as array, i (i)}
		<span bind:clientWidth={arrayWidth} class="shrink-0">
			{#each array as number, j (j)}
				{number}
			{/each}
		</span>

		{#if i < numbers.length - 1}
			<span class="min-w-0 flex-1 overflow-hidden whitespace-nowrap">
				{slashes}
			</span>
		{/if}
	{/each}
</section>
