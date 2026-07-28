<script lang="ts">
	import { setLocale, getLocale, locales, type Locale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';

	const flags: Record<Locale, { src: string; alt: string }> = {
		en: { src: 'https://cdn-icons-png.flaticon.com/512/197/197374.png', alt: 'English' },
		fr: { src: 'https://cdn-icons-png.flaticon.com/256/197/197560.png', alt: 'French' }
	};

	let langSelectorOpen = $state(false);
	let currentLocale = $state<Locale>(getLocale());

	function displayLangSelector() {
		langSelectorOpen = !langSelectorOpen;
	}

	function selectLocale(locale: Locale) {
		setLocale(locale);
		currentLocale = locale;
		langSelectorOpen = false;
	}
</script>

<header class="fixed top-0 w-full p-5 z-50">
	<nav class="flex justify-between">
		<a href="/">Home</a>
		<div class="flex items-center gap-8">
			<a href="/projects">{m['header.projects']()}</a>
			<div class="relative h-10 w-10">
				<div class="absolute top-0 flex flex-col gap-2 p-1 bg-black rounded-full">
					<button on:click={displayLangSelector}>
						<img src={flags[currentLocale].src} alt={flags[currentLocale].alt} class="h-8 aspect-square rounded-full">
					</button>
					{#if langSelectorOpen}
						{#each locales as locale}
							{#if locale !== currentLocale}
								<button on:click={() => selectLocale(locale)}>
									<img src={flags[locale].src} alt={flags[locale].alt} class="h-8 aspect-square rounded-full">
								</button>
							{/if}
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</nav>
</header>