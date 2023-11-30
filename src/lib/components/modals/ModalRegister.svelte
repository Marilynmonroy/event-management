<script async script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { getModalStore, initializeStores } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	const modalStore = getModalStore();
	initializeStores();

	// Props
	export let parent: SvelteComponent;

	// Form Data
	const formData = {
		//	role: Role.ADMIN,
		name: '',
		lastname: '',
		email: '',
		password: '',
		cpf: '',
		phone: '',
		address: ''
	};

	async function onFormSubmit() {
		const res = await fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify(formData)
		});
		const data = await res.json();
		console.log(data);
		alert(data.message);
		data.role === 'ADMIN' ? goto('/admin') : goto('/user');

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
			<div class="flex">
				<label class="label p-4">
					<span>Nome</span>
					<input
						class="input"
						type="text"
						bind:value={formData.name}
						placeholder="Digite o nome..."
					/>
				</label>
				<label class="label p-4">
					<span>Sobrenome</span>
					<input
						class="input"
						type="text"
						bind:value={formData.lastname}
						placeholder="Digite o sobrenome..."
					/>
				</label>
			</div>
			<div class="flex">
				<label class="label p-4">
					<span>CPF</span>
					<input
						class="input"
						type="text"
						bind:value={formData.cpf}
						placeholder="Digite o CPF..."
					/>
				</label>
				<label class="label p-4">
					<span>Telefone</span>
					<input
						class="input"
						type="text"
						bind:value={formData.phone}
						placeholder="Digite o telefone..."
					/>
				</label>
			</div>
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
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Cadastrar-se</button>
    </footer>
	</div>
{/if}
