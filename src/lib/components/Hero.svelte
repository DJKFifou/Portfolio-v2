<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	const title = m['homepage.hero.name']();
	const titleLetters = title.split('');

	let lettersContainer = <HTMLDivElement[]>$state([]);

	const properties: Record<string, string>[] = [
		{
			position: '-left-full!',
			translation: 'translate-x-full transition-transform duration-1000 ease-in-out'
		},
		{
			position: 'left-full!',
			translation: '-translate-x-full transition-transform duration-1000 ease-in-out'
		},
		{
			position: '-top-full!',
			translation: 'translate-y-full transition-transform duration-1000 ease-in-out'
		},
		{
			position: 'top-full!',
			translation: '-translate-y-full transition-transform duration-1000 ease-in-out'
		}
	];

	function getRandomProperties() {
		const randomIndex = Math.floor(Math.random() * properties.length);
		return properties[randomIndex];
	}

	function getRandomTime() {
		return Math.random() * 22000 + 3000;
	}

	function animateLetter(letterContainer: HTMLDivElement) {
		const spans = letterContainer.querySelectorAll<HTMLSpanElement>('span');
		const [, duplicateSpan] = spans;
		const randomProps = getRandomProperties();

		const translationClasses = randomProps.translation.split(' ');

		duplicateSpan.classList.add(randomProps.position);
		duplicateSpan.classList.remove('hidden');

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				spans.forEach((span) => span.classList.add(...translationClasses));
			});
		});

		setTimeout(() => {
			duplicateSpan.classList.remove(randomProps.position);
			duplicateSpan.classList.add('hidden');
			spans.forEach((span) => span.classList.remove(...translationClasses));
		}, 1000);
	}

	$effect(() => {
		const timeoutIds: ReturnType<typeof setTimeout>[] = [];

		lettersContainer.forEach((letterContainer, i) => {
			const scheduleNext = () => {
				timeoutIds[i] = setTimeout(() => {
					animateLetter(letterContainer);
					scheduleNext();
				}, getRandomTime());
			};

			scheduleNext();
		});

		return () => timeoutIds.forEach((id) => clearTimeout(id));
	});
</script>

<section class="relative flex min-h-screen items-end bg-theme-white">
	<img
		src="/src/lib/assets/noise.png"
		alt=""
		class="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-30"
	/>
	<div
		class="absolute top-1/2 left-1/2 flex -translate-1/2 items-center justify-center text-center"
	>
		<h1 aria-label={title} class="flex">
			{#each titleLetters as letter, i (i)}
				<div
					bind:this={lettersContainer[i]}
					class="clip-path-0 relative overflow-hidden *:font-obviously *:text-[8vw] *:font-black *:uppercase"
				>
					<span class="inline-block">
						{letter}
					</span>
					<span class="absolute left-0 hidden">
						{letter}
					</span>
				</div>
			{/each}
		</h1>
	</div>
</section>
