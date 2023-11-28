<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { getModalStore, initializeStores } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	// Props
	export let parent: SvelteComponent;

	const modalStore = getModalStore();

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
			goto('/admin');
		} else if (data.role === 'USER') {
			console.log('Entre en user');
			goto('/user');
		} else {
			console.log('Error en el inicio de sesión');
		}

		if ($modalStore[0].response) $modalStore[0].response(data);
		modalStore.close();
	}

	const cBase = 'card p-4 w-modal shadow-xl space-y-4 p-6';
	const cHeader = 'text-2xl font-bold text-center p-4';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
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
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancelar</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Entrar</button>
    </footer>
	</div>
{/if}
