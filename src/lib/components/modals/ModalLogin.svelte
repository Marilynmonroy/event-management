<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	// Props
	export let parent: SvelteComponent;

	const modalStore = getModalStore();
	const toastStore = getToastStore();

	// Form Data
	const formData = {
		email: '',
		password: ''
	};

	async function onFormSubmit() {
		const res = await fetch('/api/auth', {
			method: 'POST',
			body: JSON.stringify(formData)
		});
		const data = await res.json();

		if (data.role === 'ADMIN') {
			console.log('Entre en admin');
			const t: ToastSettings = {
				message: `Bemvindo admin!`,
				timeout: 3000,
				background: 'variant-ghost-secondary'
			};
			toastStore.trigger(t);
			goto('/admin/criar-evento');
			window.location.reload();
		} else if (data.role === 'USER') {
			console.log('Entre en user');
			const t: ToastSettings = {
				message: `Bemvindo user!`,
				timeout: 3000,
				background: 'variant-ghost-secondary'
			};
			toastStore.trigger(t);
			goto('/');
			window.location.reload();
		} else {
			console.log('Error');
			alert('Senha ou email errados');
		}

		if ($modalStore[0].response) $modalStore[0].response(data);
		modalStore.close();
	}

	const cBase = 'card p-4 w-modal shadow-xl space-y-4 p-6';
	const cHeader = 'text-2xl font-bold text-center p-4';
	const cForm = 'flex flex-col ';
</script>

{#if $modalStore[0]}
	<div class={cBase}>
		<header class={cHeader}>
			{$modalStore[0].title ?? '(title missing)'}
		</header>

		<form class="modal-form {cForm}">
			<label class="label p-4">
				<span>Email</span>
				<input
					class="input peer"
					type="email"
					bind:value={formData.email}
					placeholder="Digite o email..."
				/>
			</label>
			<label class="label p-4">
				<span>Senha</span>
				<input
					class="input"
					type="password"
					bind:value={formData.password}
					placeholder="Digite a senha..."
				/>
			</label>
		</form>
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancelar</button>
			<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Entrar</button>
		</footer>
	</div>
{/if}
