import type { PageServerLoad } from './$types';
import { projects } from '$lib/projects';

export const load: PageServerLoad = async ({ params }) => {
	const project = projects.find((p) => p.slug === params.slug);

	if (project) {
		return project;
	}
};
