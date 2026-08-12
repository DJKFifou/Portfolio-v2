<script lang="ts">
	import { resolve } from '$app/paths';
	import { m } from '$lib/paraglide/messages.js';
	import type { PageProps } from './$types';
	import type { ProjectType } from '$lib/projects';

	let { data }: PageProps = $props();
</script>

{#snippet Project(project: ProjectType)}
	<div
		class="group relative aspect-video w-[calc(100%*1/3-4rem/3)] overflow-hidden bg-theme-black"
		style="view-timeline-name: --project; view-timeline-axis: block;"
	>
		<a href={`/projects/${project.slug}`}>
			{#if project.images?.home}
				<img
					src={project.images?.home.src}
					alt={project.images?.home.alt}
					class="project-image absolute inset-0 h-[120%] w-full origin-center object-cover transition-all duration-300 ease-in-out group-hover:scale-75"
				/>
			{:else}
				<img
					src={project.images?.moodboard?.src}
					alt={project.images?.moodboard?.alt}
					class="project-image absolute inset-0 h-[120%] w-full origin-center object-cover transition-all duration-300 ease-in-out group-hover:scale-75"
				/>
			{/if}
			<div
				class="absolute inset-0 bg-yellow-500 opacity-0 mix-blend-color transition-all duration-300 ease-in-out group-hover:opacity-100"
			></div>

			<div
				class="absolute inset-0 bg-linear-to-t from-theme-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			></div>

			<div
				class="text-mono absolute top-0 left-1/2 flex w-full -translate-x-1/2 justify-center gap-2 text-xs text-wrap opacity-0 transition-all duration-300 ease-in-out group-hover:top-5 group-hover:opacity-100"
			>
				{#each project.tags as tag, i (i)}
					<span class="rounded-full bg-theme-black px-4 py-1 text-theme-white">
						{tag}
					</span>
				{/each}
			</div>

			<h3
				class="text-mono absolute bottom-0 left-0 px-4 font-obviously text-3xl font-black text-wrap text-theme-white uppercase opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-5 group-hover:opacity-100"
				class:pr-16={project.external_link}
			>
				{project.title}
			</h3>
		</a>
		{#if project.external_link}
			<a
				href={project.external_link}
				target="_blank"
				class="absolute right-4 bottom-4 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			>
				<img src="/src/lib/assets/arrow.svg" alt="Left Arrow" class="h-8 w-8" />
			</a>
		{/if}
	</div>
{/snippet}

<section class="m-25 mt-35 flex flex-col gap-16">
	<h2 class="font-obviously text-7xl font-black text-theme-black">{m['header.projects']()}</h2>
	<div class="flex flex-wrap gap-8">
		{#each data.projects as project (project.slug)}
			{@render Project(project)}
		{/each}
		{#each data.projects as project (project.slug)}
			{@render Project(project)}
		{/each}
		{#each data.projects as project (project.slug)}
			{@render Project(project)}
		{/each}
		{#each data.projects as project (project.slug)}
			{@render Project(project)}
		{/each}
	</div>
</section>

<style>
	@keyframes project-parallax {
		from {
			transform: translateY(-15%);
		}

		to {
			transform: translateY(5%);
		}
	}

	.project-image {
		animation: project-parallax linear;
		animation-timeline: --project;
		animation-range: entry 0% exit 100%;
	}
</style>
