<script lang="ts">
	import { resolve } from '$app/paths';
	import { m } from '$lib/paraglide/messages.js';

	const projects = [
		{
			id: 1,
			link: '/projects/lets-summon-demons',
			title: "Let's Summon Demons",
			image: {
				src: '/src/lib/assets/images/LSD/LSD_Home.png',
				alt: "Let's Summon Demons"
			},
			tags: ['Jeu', 'Multi', 'Site web']
		},
		{
			id: 2,
			link: '/projects/marin-french-cheese',
			external_link: 'https://marinfrenchcheese.com',
			title: 'Marin French Cheese',
			image: {
				src: '/src/lib/assets/images/MFC/MFC_Moodboard.png',
				alt: 'Marin French Cheese'
			},
			tags: ['E-commerce', 'Site web', 'Shopify']
		},
		{
			id: 3,
			link: '/projects/white-toque',
			external_link: 'https://whitetoque.com',
			title: 'White-Toque',
			image: {
				src: '/src/lib/assets/images/White-Toque/White-Toque_Moodboard.png',
				alt: 'White-Toque'
			},
			tags: ['Site web', 'Wordpress']
		},
		{
			id: 4,
			link: '/projects/taillan-medoc',
			external_link: 'https://www.taillan-medoc.fr',
			title: 'Taillan-Medoc',
			image: {
				src: '/src/lib/assets/images/Taillan-Medoc/Taillan-Medoc_Home.png',
				alt: 'Taillan-Medoc'
			},
			tags: ['Site web', 'Wordpress']
		},
		{
			id: 5,
			link: '/projects/geoquizz',
			external_link: 'https://geoquizz.maximelust.fr',
			title: 'Geoquizz',
			image: {
				src: '/src/lib/assets/images/Geoquizz/Geoquizz_Home.png',
				alt: 'Geoquizz'
			},
			tags: ['Jeu', 'Solo', 'Site web']
		}
	];

	interface ProjectType {
		id: number;
		link: string;
		external_link?: string;
		title: string;
		image: {
			src: string;
			alt: string;
		};
		tags: string[];
	}
</script>

{#snippet Project(project: ProjectType)}
	<div
		class="group relative aspect-video w-[calc(100%*1/3-4rem/3)] overflow-hidden"
		style="view-timeline-name: --project; view-timeline-axis: block;"
	>
		<a href={resolve(project.link)}>
			<img
				src={project.image.src}
				alt={project.image.alt}
				class="project-image absolute inset-0 h-[120%] w-full object-cover"
			/>

			<div
				class="absolute inset-0 bg-linear-to-t from-theme-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			></div>

			<div
				class="text-mono absolute top-0 left-1/2 flex w-full -translate-x-1/2 justify-center gap-2 text-xs text-wrap opacity-0 transition-all duration-300 ease-in-out group-hover:top-5 group-hover:opacity-100"
			>
				{#each project.tags as tag, i (i)}
					<span class="rounded-full bg-theme-brown px-4 py-1 text-theme-white">
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
		{#each projects as project (project.id)}
			{@render Project(project)}
		{/each}
	</div>
</section>

<style>
	@keyframes project-parallax {
		from {
			transform: translateY(-12%);
		}

		to {
			transform: translateY(12%);
		}
	}

	.project-image {
		animation: project-parallax linear;
		animation-timeline: --project;
		animation-range: entry 0% exit 100%;
	}
</style>
