import type { PageServerLoad } from './$types';
import { projects } from '$lib/projects';

export const load: PageServerLoad = async () => {
	if (projects) {
		return { projects };
	}
};
