<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	let name: string = $state('');
	let contactMethod: 'email' | 'whatsapp' = $state('email');

	const contactPlaceholders: { email: string; whatsapp: string } = {
		email: 'john.doe@example.com',
		whatsapp: '+33 6 06 06 06 06'
	};

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();

		const form = event.currentTarget as HTMLFormElement;
		const formData = new FormData(form);

		const data = Object.fromEntries(formData.entries());

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Une erreur est survenue.');
			}

			console.log('Message envoyé !');

			form.reset();
		} catch (error) {
			console.error(error);
		}
	}
</script>

<h2>{m['header.contact']()}</h2>

<section class="flex h-screen-dvh items-center justify-center bg-theme-white text-theme-black">
	<form class="flex max-w-3xl flex-col text-2xl font-semibold" onsubmit={handleSubmit}>
		<span>{m['contact.hello']()}</span>

		<span>
			{m['contact.name']()} (
			<input type="text" name="name" bind:value={name} placeholder="John Doe" required />
			).
		</span>

		<span>
			{m['contact.wanted']()} (
			<select name="projectType" required>
				<option value="landing-page">{m['contact.reasons.landing-page']()}</option>
				<option value="multipage">{m['contact.reasons.multipage']()}</option>
				<option value="web-app">{m['contact.reasons.web-app']()}</option>
				<option value="online-game">{m['contact.reasons.online-game']()}</option>
				<option value="other">{m['contact.reasons.other']()}</option>
			</select>
			) {m['contact.date']()} (
			<input type="month" name="deadline" required />
			).
		</span>

		<span>
			{m['contact.budget']()} (
			<input
				class="w-25"
				type="number"
				name="budget"
				placeholder="10000"
				value="10000"
				step="1000"
				required
			/>
			) €.
		</span>

		<div class="flex whitespace-nowrap">
			{m['contact.message']()} : (<textarea
				class="w-full"
				name="message"
				placeholder={m['contact.message_placeholder']()}
				required></textarea>).
		</div>

		<span>
			{m['contact.contact']()} (
			<select name="contactMethod" bind:value={contactMethod} required>
				<option value="email">Email</option>
				<option value="whatsapp">WhatsApp</option>
			</select>
			) : (
			<input
				class="w-80"
				type={contactMethod === 'email' ? 'email' : 'text'}
				name="contact"
				placeholder={contactPlaceholders[contactMethod]}
				required
			/>
			).
		</span>

		<span>
			{m['contact.kind_regards']()}, (
			<input type="text" name="signature" bind:value={name} placeholder="John Doe" required />
			).
		</span>

		<button type="submit" class="mt-4 w-fit rounded bg-theme-black px-4 py-2 text-theme-white">
			{m['contact.submit']()}
		</button>
	</form>
</section>
