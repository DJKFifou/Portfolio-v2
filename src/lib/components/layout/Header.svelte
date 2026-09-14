<script lang="ts">
	import { resolve } from '$app/paths';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';

	const menu = [
		{ label: m['header.projects'](), href: '/projects' },
		{ label: m['header.about'](), href: '/about' },
		{ label: m['header.contact'](), href: '/contact' }
	] as const;

	let inverted = $state(false);

	function toggleTheme() {
		inverted = !inverted;
		document.documentElement.classList.toggle('theme-inverted', inverted);
	}

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
		document.body.classList.toggle('overflow-hidden', menuOpen);
	}
</script>

<header
	class="fixed top-0 z-50 w-full border-b bg-theme-white text-theme-black transition-all duration-700 ease-in-out"
>
	<nav class="flex items-center justify-between md:items-stretch">
		<a href={resolve('/')} class="border-r px-5 pt-3 pb-5 font-obviously text-4xl font-black">ML</a>
		<button
			aria-label="Open menu"
			class="mr-6 flex flex-col gap-1.5 *:h-0.5 *:w-6 *:rounded-full *:bg-theme-black md:hidden"
			onclick={toggleMenu}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
		{#if menuOpen}
			<div
				class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-theme-white text-theme-black md:hidden"
			>
				{#each menu as item, i (i)}
					<a
						href={resolve(item.href)}
						class="text-mono text-3xl font-medium uppercase"
						onclick={toggleMenu}>{item.label}</a
					>
				{/each}
				<div class="flex">
					<div class="flex gap-4">
						<button
							onclick={() => setLocale('fr')}
							class="relative h-full px-5 {getLocale() === 'fr'
								? 'underline underline-offset-4'
								: ''}">FR</button
						>
						<hr class="h-full w-px" />
						<button
							onclick={() => setLocale('en')}
							class="relative h-full px-5 {getLocale() === 'en'
								? 'underline underline-offset-4'
								: ''}">EN</button
						>
					</div>
				</div>
				<button
					onclick={toggleTheme}
					class="group relative flex items-center px-5 uppercase"
					aria-label="toggle theme"
				>
					<span
						class="relative h-5 w-5 overflow-hidden rounded-full border-2 border-theme-black bg-theme-white transition-all duration-500 ease-in-out group-hover:border-theme-white group-hover:bg-theme-black"
					>
						<span
							class="absolute -left-1/2 h-full w-full bg-theme-black transition-all duration-500 ease-in-out group-hover:bg-theme-white"
						></span>
					</span>
				</button>
				<button
					aria-label="close menu"
					class="absolute top-7 right-6 flex h-4.5 w-6 items-center justify-center *:h-0.5 *:w-6 *:rounded-full *:bg-theme-black md:hidden"
					onclick={toggleMenu}
				>
					<span class="absolute top-1/2 -translate-y-1/2 rotate-45"></span>
					<span class="absolute top-1/2 -translate-y-1/2 rotate-135"></span>
				</button>
			</div>
		{/if}
		<div
			class="hidden items-center gap-8 border-l pl-8 font-dm text-sm font-medium uppercase md:flex"
		>
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
				<button
					onclick={toggleTheme}
					class="group lang-swap relative flex items-center px-5 uppercase"
					aria-label="toggle theme"
				>
					<span
						class="relative h-5 w-5 overflow-hidden rounded-full border-2 border-theme-black bg-theme-white transition-all duration-500 ease-in-out group-hover:border-theme-white group-hover:bg-theme-black"
					>
						<span
							class="absolute -left-1/2 h-full w-full bg-theme-black transition-all duration-500 ease-in-out group-hover:bg-theme-white"
						></span>
					</span>
				</button>
			</div>
		</div>
	</nav>
</header>
