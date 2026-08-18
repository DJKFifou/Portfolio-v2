<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	console.log('data : ', data);

	let image: HTMLImageElement;
	let tagsElement: HTMLDivElement;
	let subtitleElement: HTMLDivElement;

	let scale = $state(1.1);
	let viewportHeight = $state(0);
	let translateY = $state(0);
	let opacity = $state(0);
	let elementsTranslate = $state(0);
	let clipPath = $state('polygon(30% 35%, 70% 35%, 70% 80%, 30% 80%)');

	const minScale = 1.1;
	const maxScale = 1;

	const minTranslateY = 0;
	const maxTranslateY = 50;

	const initialClip = {
		topLeft: { x: 30, y: 50 },
		topRight: { x: 70, y: 50 },
		bottomRight: { x: 70, y: 80 },
		bottomLeft: { x: 30, y: 80 }
	};

	const finalClip = {
		topLeft: { x: 0, y: 0 },
		topRight: { x: 100, y: 0 },
		bottomRight: { x: 100, y: 100 },
		bottomLeft: { x: 0, y: 100 }
	};

	function interpolate(start: number, end: number, progress: number) {
		return start + (end - start) * progress;
	}

	function updateClipPath(progress: number) {
		const topLeftX = interpolate(initialClip.topLeft.x, finalClip.topLeft.x, progress);
		const topLeftY = interpolate(initialClip.topLeft.y, finalClip.topLeft.y, progress);

		const topRightX = interpolate(initialClip.topRight.x, finalClip.topRight.x, progress);
		const topRightY = interpolate(initialClip.topRight.y, finalClip.topRight.y, progress);

		const bottomRightX = interpolate(initialClip.bottomRight.x, finalClip.bottomRight.x, progress);
		const bottomRightY = interpolate(initialClip.bottomRight.y, finalClip.bottomRight.y, progress);

		const bottomLeftX = interpolate(initialClip.bottomLeft.x, finalClip.bottomLeft.x, progress);
		const bottomLeftY = interpolate(initialClip.bottomLeft.y, finalClip.bottomLeft.y, progress);

		clipPath = `polygon(
            ${topLeftX}% ${topLeftY}%,
            ${topRightX}% ${topRightY}%,
            ${bottomRightX}% ${bottomRightY}%,
            ${bottomLeftX}% ${bottomLeftY}%
        )`;
	}

	function updateScale() {
		viewportHeight = window.innerHeight;

		const progress = Math.min(window.scrollY / viewportHeight, 1);

		scale = minScale + (maxScale - minScale) * progress;

		translateY = minTranslateY + (maxTranslateY - minTranslateY) * (1 - scale);

		opacity = 1 - progress * 2;

		elementsTranslate = 20 * (1 - progress * 2);

		updateClipPath(progress);
	}

	$effect(() => {
		updateScale();

		window.addEventListener('scroll', updateScale, { passive: true });
		window.addEventListener('resize', updateScale);

		return () => {
			window.removeEventListener('scroll', updateScale);
			window.removeEventListener('resize', updateScale);
		};
	});
</script>

<section
	class="relative flex h-[200dvh] flex-col items-center justify-between gap-16 pt-18 text-center"
>
	<h2 class="py-4 font-obviously text-8xl font-black text-theme-black uppercase">
		{data.title}
	</h2>

	<div
		bind:this={tagsElement}
		class="text-mono fixed top-55 left-1/2 flex w-full -translate-1/2 justify-center gap-2 text-xs text-wrap"
		class:hidden={scale === 1}
		style={`transform: translateY(${elementsTranslate}px); opacity: ${opacity};`}
	>
		{#each data.tags as tag, i (i)}
			<span class="rounded-full bg-theme-black px-4 py-1 text-theme-white">
				{tag}
			</span>
		{/each}
	</div>

	<div class="h-screen-dvh w-full">
		<img
			bind:this={image}
			src={data.images?.home?.src}
			alt={data.images?.home?.alt}
			class="fixed top-1/2 left-1/2 h-full w-full -translate-1/2 bg-theme-black object-cover"
			class:relative={scale === 1}
			style={`
                scale: ${scale};
                transform: translate(0%, ${translateY}%);
                clip-path: ${clipPath};
            `}
		/>
	</div>

	<div
		bind:this={subtitleElement}
		class="fixed bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-6 text-center text-theme-black"
		class:hidden={scale === 1}
		style={`transform: translateY(-${elementsTranslate}px); opacity: ${opacity};`}
	>
		<p class="text-xl font-medium">{data.subtitle}</p>

		<img src="/src/lib/assets/arrow-up-black.svg" alt="" class="h-5 rotate-180 object-contain" />
	</div>
</section>

<section class="flex h-screen-dvh-header flex-col items-center justify-evenly gap-8 text-center">
	<p class="max-w-2xl text-3xl font-semibold">{data.description}</p>
</section>

<section>
	<img
		src={data.images?.moodboard?.src}
		alt={data.images?.moodboard?.alt}
		class="w-full object-contain"
	/>
</section>

<section class="flex flex-col items-center gap-20 py-20">
	<p class="font-obviously text-4xl font-bold">Technologies</p>
	<div class="flex max-w-xl flex-wrap justify-center gap-16">
		{#each data.technologies as technology (technology.title)}
			<div class="flex flex-col items-center gap-4">
				<img src={technology.icon} alt={technology.title} class="h-12 w-12 object-contain" />
				<p class="font-mono font-medium">{technology.title}</p>
			</div>
		{/each}
	</div>
</section>

<section>
	{#if data.images?.gallery}
		<div class="mx-4 grid grid-cols-2 gap-4">
			{#each data.images.gallery as image, i (i)}
				<img src={image.src} alt={image.alt} class="h-full w-full object-cover" />
			{/each}
		</div>
	{/if}
</section>

<section class="flex flex-col items-center gap-20 py-20 text-center">
	<h2 class="font-obviously text-4xl font-bold">Contexte</h2>
	<p class="max-w-3xl text-2xl font-medium">{@html data.context}</p>
	<a
		href={data.external_link}
		target="_blank"
		rel="noreferrer"
		class="flex items-center gap-1 rounded-full bg-theme-black px-4 py-1 text-theme-white"
	>
		Visiter le site
		<img src="/src/lib/assets/arrow.svg" alt="Left Arrow" class="h-4 object-cover" />
	</a>
</section>
