<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
</script>

<section
	class="flex h-screen-dvh flex-col items-center justify-center gap-20 bg-theme-white text-theme-black"
>
	<h2 class="font-obviously text-7xl font-black">{m['about.education.title']()}</h2>
	<div class="flex gap-10">
		<div class="flex flex-col gap-5">
			<span class="text-lg font-bold">{m['about.education.years']()}</span>
			<p>2017 - 2020</p>
			<p>2020 - 2021</p>
			<p>2021 - 2024</p>
			<p>2024 - 2026</p>
		</div>
		<div class="flex flex-col gap-5">
			<span class="text-lg font-bold">{m['about.education.qualifications']()}</span>
			<p>{m['about.education.secondary_school.qualification']()}</p>
			<p>{m['about.education.dut.qualification']()}</p>
			<p>{m['about.education.but.qualification']()}</p>
			<p>{m['about.education.master.qualification']()}</p>
		</div>
		<div class="flex flex-col gap-5">
			<span class="text-lg font-bold">{m['about.education.schools']()}</span>
			<p>{m['about.education.secondary_school.school']()}</p>
			<p>{m['about.education.dut.school']()}</p>
			<p>{m['about.education.but.school']()}</p>
			<p>{m['about.education.master.school']()}</p>
		</div>
		<div class="flex flex-col gap-5">
			<span class="text-lg font-bold">{m['about.education.locations']()}</span>
			<p>{m['about.education.secondary_school.location']()}</p>
			<p>{m['about.education.dut.location']()}</p>
			<p>{m['about.education.but.location']()}</p>
			<p>{m['about.education.master.location']()}</p>
		</div>
	</div>
</section>

<section
	class="flex h-screen-dvh flex-col items-center justify-center gap-20 bg-theme-black text-theme-white"
>
	<h2 class="font-obviously text-7xl font-black">{m['about.jobs.title']()}</h2>
	<div class="flex gap-10">
		<div class="flex flex-col gap-5">
			<span class="text-lg font-bold">{m['about.jobs.years']()}</span>
			<p>2023</p>
			<p>2023 - 2024</p>
			<p>2024 - 2026</p>
			<p>2026 - ...</p>
		</div>
		<div class="flex flex-col gap-5">
			<span class="text-lg font-bold">{m['about.jobs.jobs']()}</span>
			<p>{m['about.jobs.thrive.job']()}</p>
			<p>{m['about.jobs.mink.job']()}</p>
			<p>{m['about.jobs.favoreat.job']()}</p>
			<p>{m['about.jobs.freelance.job']()}</p>
		</div>
		<div class="flex flex-col gap-5">
			<span class="text-lg font-bold">{m['about.jobs.companies']()}</span>
			<p>{m['about.jobs.thrive.company']()}</p>
			<p>{m['about.jobs.mink.company']()}</p>
			<p>{m['about.jobs.favoreat.company']()}</p>
		</div>
		<div class="flex flex-col gap-5">
			<span class="text-lg font-bold">{m['about.jobs.durations']()}</span>
			<p>{m['about.jobs.thrive.duration']()}</p>
			<p>{m['about.jobs.mink.duration']()}</p>
			<p>{m['about.jobs.favoreat.duration']()}</p>
		</div>
		<div class="flex flex-col gap-5">
			<span class="text-lg font-bold">{m['about.jobs.locations']()}</span>
			<p>{m['about.jobs.thrive.location']()}</p>
			<p>{m['about.jobs.mink.location']()}</p>
			<p>{m['about.jobs.favoreat.location']()}</p>
		</div>
	</div>
</section>

<section
	class="flex h-screen-dvh flex-col items-center justify-center gap-20 bg-theme-white text-theme-black"
>
	<h2 class="font-obviously text-7xl font-black">Technologies</h2>
	<div class="flex max-w-2xl flex-wrap justify-center gap-10">
		<img src="/src/lib/assets/icons/svelte.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img
			src="/src/lib/assets/icons/typescript.svg"
			alt=""
			class="h-14 bg-white object-contain p-2"
		/>
		<img
			src="/src/lib/assets/icons/javascript.svg"
			alt=""
			class="h-14 bg-white object-contain p-2"
		/>
		<img src="/src/lib/assets/icons/tailwind.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/react.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/next.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/astro.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/socketio.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/php.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img
			src="/src/lib/assets/icons/wordpress.svg"
			alt=""
			class="h-14 bg-white object-contain p-2"
		/>
		<img src="/src/lib/assets/icons/shopify.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/mysql.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/supabase.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/gsap.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/threejs.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/webgl.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/unity.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/go.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/html.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/sass.svg" alt="" class="h-14 bg-white object-contain p-2" />
		<img src="/src/lib/assets/icons/css.svg" alt="" class="h-14 bg-white object-contain p-2" />
	</div>
</section>
