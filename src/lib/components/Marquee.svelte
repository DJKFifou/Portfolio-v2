<script lang="ts">
	import { onMount } from 'svelte';

	let { children } = $props();

	let element: HTMLElement[] = $state([]);
	let containerWidth: number = $state(0);
	let renderQty = $derived(Math.ceil(containerWidth / (element[0]?.clientWidth || 1) + 1));

	function marqueeAnimation(speed: number) {
		let offSet = 0;
		const interval = setInterval(() => {
			element[0].style.marginLeft = `-${offSet}px`;
			if (offSet > element[0].clientWidth) {
				offSet = 0;
			}
			offSet += speed;
		}, 16);

		return () => clearInterval(interval);
	}
	onMount(() => {
		return marqueeAnimation(2.5);
	});
</script>

<div class="flex w-full overflow-hidden" bind:clientWidth={containerWidth}>
	{#each Array(renderQty) as _, i (i)}
		<div bind:this={element[i]}>
			{@render children()}
		</div>
	{/each}
</div>
