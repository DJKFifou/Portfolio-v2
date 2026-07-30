<script lang="ts">
	import { resolve } from '$app/paths';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';

	const menu = [
		{ label: m['header.index'](), href: '/index' },
		{ label: m['header.projects'](), href: '/projects' },
		{ label: m['header.about'](), href: '/about' },
		{ label: m['header.contact'](), href: '/contact' }
	] as const;

	let inverted = $state(false);

	function toggleTheme() {
		inverted = !inverted;
		document.documentElement.classList.toggle('theme-inverted', inverted);
	}
</script>

<header
	class="fixed top-0 z-50 w-full border-b bg-theme-white text-theme-black transition-all duration-700 ease-in-out"
>
	<nav class="flex justify-between">
		<a href={resolve('/')} class="border-r px-5 pt-3 pb-5 font-obviously text-4xl font-black">ML</a>
		<div class="flex items-center gap-8 border-l pl-8 font-dm text-sm font-medium uppercase">
			{#each menu as item, i (i)}
				<a
					href={resolve(item.href)}
					class="group relative flex
							*:relative *:*:block *:flex *:h-4 *:flex-col *:gap-1 *:overflow-hidden *:align-top
							*:leading-none *:*:transition-transform *:*:duration-(--d) *:*:ease-in-out *:*:group-hover:-translate-y-[calc(100%+4px)]"
					aria-label={item.label}
				>
					{#each item.label.split('') as letter, i (i)}
						{#if letter === ' '}
							<div class="w-1.5" aria-hidden="true"></div>
						{:else}
							<div style="--d: {100 + i * 50}ms">
								<span>{letter}</span><span>{letter}</span>
							</div>
						{/if}
					{/each}
				</a>
			{/each}
			<div class="flex h-full">
				<div class="lang-switcher flex flex-col items-center justify-between border-x">
					<button
						onclick={() => setLocale('fr')}
						class="lang-swap relative h-full px-5 {getLocale() === 'fr' ? 'lang-swap-hover' : ''}"
						>FR</button
					>
					<hr class="w-full" />
					<button
						onclick={() => setLocale('en')}
						class="lang-swap relative h-full px-5 {getLocale() === 'en' ? 'lang-swap-hover' : ''}"
						>EN</button
					>
				</div>
				<button onclick={toggleTheme} class="lang-swap relative flex items-center px-5 uppercase">
					Mode
				</button>
			</div>
		</div>
	</nav>
</header>
