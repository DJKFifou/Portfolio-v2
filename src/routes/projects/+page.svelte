<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import RandomBinaryNumber from '$lib/components/RandomBinaryNumber.svelte';
	import ProjectsScrolling from '$lib/components/ProjectsScrolling.svelte';
</script>

<h2>{m['header.projects']()}</h2>

<ProjectsScrolling />
<RandomBinaryNumber />
<RandomBinaryNumber />
