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

<header class="fixed top-0 w-full z-50 border-b bg-theme-white text-theme-black transition-all duration-700 ease-in-out">
	<nav class="flex justify-between">
		<a href={resolve('/')} class="font-obviously font-black text-4xl p-5 border-r">ML</a>
		<div class="flex items-center gap-8 pl-8 text-sm font-dm font-medium uppercase border-l">
			{#each menu as item, i (i)}
				<a href={resolve(item.href)} class="relative group">
					<div
						aria-label={item.label}
						class="flex
							*:relative *:flex *:flex-col *:gap-1 *:h-4 *:overflow-hidden *:leading-none *:align-top
							*:*:block *:*:transition-transform *:*:ease-in-out *:*:duration-(--d) *:*:group-hover:-translate-y-[calc(100%+4px)]"
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
					</div>
				</a>
			{/each}
			<div class="flex h-full">
				<div class="flex flex-col items-center justify-between border-x lang-switcher">
					<button on:click={() => setLocale("fr")} class="px-5 h-full relative lang-swap {getLocale() === 'fr' ? 'lang-swap-hover' : ''}">FR</button>
					<hr class="w-full">
					<button on:click={() => setLocale("en")} class="px-5 h-full relative lang-swap {getLocale() === 'en' ? 'lang-swap-hover' : ''}">EN</button>
				</div>
				<button on:click={toggleTheme} class="flex items-center px-5 relative lang-swap uppercase">
					Mode
				</button>
			</div>
		</div>
	</nav>
</header>