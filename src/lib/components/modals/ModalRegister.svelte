<script async script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import {
		getModalStore,
		getToastStore,
		initializeStores,
		type ToastSettings
	} from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	const modalStore = getModalStore();
	initializeStores();
	const toastStore = getToastStore();

	// Props
	export let parent: SvelteComponent;

	// Form Data
	const formData = {
		//	role: Role.ADMIN, ---- nao se passa no front ele e gerado no banco de dados
		name: '',
		lastname: '',
		email: '',
		password: '',
		cpf: '',
		phone: ''
	};

	async function onFormSubmit() {
		const res = await fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify(formData)
		});
		const data = await res.json();
		console.log(data);
		const t: ToastSettings = {
			message: `Usuário cadastrado com sucesso!`,
			timeout: 3000,
			background: 'variant-ghost-secondary'
		};
		toastStore.trigger(t);
		goto('/admin/criar-evento');
		window.location.reload();
		if (data.status === 400) {
			console.log(data.status);
		} else if (data.status === 201) {
			data.role === 'ADMIN' ? goto('/admin') : goto('/user');
			if ($modalStore[0].response) $modalStore[0].response(data);
			modalStore.close();
		} else {
			console.log('deu ruim');
			console.log(data.status);
		}
	}

	const cBase = 'card  w-modal shadow-xl p-4 rounded-xl';
	const cHeader = 'h3 font-bold text-center p-4';
	const cForm = 'felx flex flex-col';
</script>

{#if $modalStore[0]}
	<div class={cBase}>
		<header class="{cHeader} text-secondary-500">
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
		<footer class="flex p-2 w-full justify-evenly {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancelar</button>
			<button
				class="btn variant-filled-primary {parent.buttonPositive}"
				on:click={onFormSubmit}>Cadastrar-se</button
			>
		</footer>
	</div>
{/if}
