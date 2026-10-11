<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import ArrowsCursorCentered from '$lib/components/ArrowsCursorCentered.svelte';

	const links = [
		{
			href: 'https://github.com/DJKFifou',
			target: '_blank',
			rel: 'noreferrer',
			icon: '/src/lib/assets/icons/github.svg',
			alt: 'GitHub'
		},
		{
			href: 'https://www.linkedin.com/in/maxime-lust/',
			target: '_blank',
			rel: 'noreferrer',
			icon: '/src/lib/assets/icons/linkedin.svg',
			alt: 'LinkedIn'
		},
		{
			href: 'mailto:lust.maxime@outlook.fr',
			target: '',
			rel: '',
			icon: '/src/lib/assets/icons/gmail.svg',
			alt: 'Gmail'
		}
	];
</script>

<footer class="">
	<ArrowsCursorCentered />
	<div
		class="flex flex-col items-center justify-center gap-10 bg-theme-black py-10 text-theme-white md:py-20 lg:py-40"
	>
		<h3 class="px-4 text-center font-obviously text-3xl font-black lg:text-7xl">
			{m['footer.reach_me']()}
		</h3>
		<div class="flex items-center gap-8">
			{#each links as link (link.href)}
				<a href={link.href} class="bg-white p-2" target={link.target} rel={link.rel}>
					<img src={link.icon} alt={link.alt} class="h-6 object-contain md:h-8 lg:h-10" />
				</a>
			{/each}
		</div>
	</div>
	<div
		class="flex flex-col items-center gap-4 bg-theme-black p-4 font-mono text-sm text-theme-white uppercase md:flex-row md:justify-between md:text-base"
	>
		<p>France · Bordeaux · {m['footer.remote']()}</p>
		<p>©{new Date().getFullYear()} — {m['footer.copyright']()}</p>
	</div>
</footer>
