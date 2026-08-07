<script lang="ts">
	import { onMount } from 'svelte';

	let { children, direction = 'left' } = $props();

	let track: HTMLElement = $state();
	let element: HTMLElement[] = $state([]);
	let containerWidth: number = $state(0);
	let renderQty = $derived(Math.ceil(containerWidth / (element[0]?.clientWidth || 1) + 2));

	// Signe de base selon la prop `direction`
	const baseSign = direction === 'left' ? -1 : 1;

	// Multiplicateur d'inversion piloté par le scroll (1 = normal, -1 = inversé)
	let scrollInvert = $state(1);

	function marqueeAnimation(speed: number) {
		let offset = 0;
		const interval = setInterval(() => {
			const itemWidth = element[0]?.clientWidth || 0;
			if (!itemWidth || !track) return;

			offset += baseSign * scrollInvert * speed;

			// On "wrap" l'offset dans [-itemWidth, 0] pour une boucle infinie sans saut
			while (offset > 0) offset -= itemWidth;
			while (offset <= -itemWidth) offset += itemWidth;

			track.style.transform = `translateX(${offset}px)`;
		}, 16);

		return () => clearInterval(interval);
	}

	function handleScrollDirection() {
		let lastScrollY = window.scrollY;

		const onScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY) {
				// Scroll vers le bas -> sens d'origine
				scrollInvert = 1;
			} else if (currentScrollY < lastScrollY) {
				// Scroll vers le haut -> sens inversé
				scrollInvert = -1;
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	}

	onMount(() => {
		const stopAnimation = marqueeAnimation(2.5);
		const stopScrollListener = handleScrollDirection();

		return () => {
			stopAnimation();
			stopScrollListener();
		};
	});
</script>

<div class="flex w-full overflow-hidden" bind:clientWidth={containerWidth}>
	<div class="flex" bind:this={track}>
		{#each Array(renderQty) as _, i (i)}
			<div bind:this={element[i]}>
				{@render children()}
			</div>
		{/each}
	</div>
</div>
