<script lang="ts">
	import { resolve } from '$app/paths';

	let container: HTMLDivElement | null = $state(null);

	let mouseX = $state(0);
	let mouseY = $state(0);
	let isDesktop = $state(false);

	const cols = 12;
	const rows = 6;

	$effect(() => {
		const mediaQuery = window.matchMedia('(min-width: 1024px)');

		function updateDevice() {
			isDesktop = mediaQuery.matches;
		}

		updateDevice();
		mediaQuery.addEventListener('change', updateDevice);

		function handleMouseMove(e: MouseEvent) {
			if (!container || !isDesktop) return;

			const rect = container.getBoundingClientRect();
			mouseX = e.clientX - rect.left;
			mouseY = e.clientY - rect.top;
		}

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			mediaQuery.removeEventListener('change', updateDevice);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});

	function getRotation(index: number) {
		if (!container) return 0;

		const rect = container.getBoundingClientRect();
		const cellWidth = rect.width / cols;
		const cellHeight = rect.height / rows;

		const col = index % cols;
		const row = Math.floor(index / cols);

		const x = col * cellWidth + cellWidth / 2;
		const y = row * cellHeight + cellHeight / 2;

		const targetX = isDesktop ? mouseX : rect.width / 2;
		const targetY = isDesktop ? mouseY : rect.height / 2;

		const angle = Math.atan2(targetY - y, targetX - x) * (180 / Math.PI);

		return angle + 90;
	}
</script>

<section class="relative bg-theme-black">
	<div bind:this={container} class="grid grid-cols-12 grid-rows-6 overflow-hidden">
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
		{#each Array(72) as _, i (i)}
			<span
				class="aspect-square w-full bg-[url(/src/lib/assets/arrow-up-white.svg)] bg-size-[50%] bg-center bg-no-repeat [html.theme-inverted_&]:bg-[url(/src/lib/assets/arrow-up-black.svg)]"
				style="transform: rotate({getRotation(i)}deg);"
			></span>
		{/each}
	</div>
	<div class="pointer-events-none absolute inset-0 flex items-center justify-center">
		<a
			href={resolve('/contact')}
			class="transition-color pointer-events-auto flex h-1/3 w-1/2 -translate-y-1/12 items-center justify-center bg-theme-black text-center font-obviously text-[6vw] font-black text-theme-white duration-300 ease-in-out hover:text-theme-white/75"
		>
			Let's talk 🙂
		</a>
	</div>
</section>
