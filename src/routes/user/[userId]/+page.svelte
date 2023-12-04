<script lang="ts">
	import { onMount } from 'svelte';

	export let data;
	const userId = data.user;
	console.log(userId);

	let formData = {
		name: '',
		lastname: '',
		email: '',
		cpf: '',
		phone: ''
	};

	async function fetchData() {
		try {
			const res = await fetch(`/api/users/${3}`);
			const userData = await res.json();
			formData = { ...userData };
		} catch (error) {
			console.error('Error al obtener los datos del usuario:', error);
		}
	}
	onMount(() => {
		fetchData();
	});

	async function onFormSubmit() {
		try {
			const res = await fetch(`/api/users/${userId}`, {
				method: 'PATCH',
				body: JSON.stringify(formData)
			});
			const data = await res.json();
			console.log(data);
			alert('Usuario Editado');
		} catch (error) {
			console.error('Error al enviar los datos:', error);
		}
	}
</script>

<div class="flex flex-col w-full items-center">
	<h2 class="h2 p-10 font-bold">Minha conta</h2>
	<form class="card flex flex-col p-10 gap-3 w-[70%]">
		<div class="flex w-full gap-10 items-end pb-5">
			<label class="label w-1/2">
				<span class="font-semibold text-lg">Nome:</span>
				<input class="input" type="text" bind:value={formData.name} />
			</label>
			<label class="label w-1/2">
				<span class="font-semibold text-lg">Sobrenome:</span>
				<input class="input" type="text" bind:value={formData.lastname} />
			</label>
		</div>
		<div class="flex w-full gap-10 items-end pb-5">
			<label class="label w-1/2">
				<span class="font-semibold text-lg">CPF</span>
				<input class="input" type="text" bind:value={formData.cpf} />
			</label>
			<label class="label w-1/2">
				<span class="font-semibold text-lg">Telefone</span>
				<input class="input" type="text" bind:value={formData.phone} />
			</label>
		</div>
		<label class="label pb-5">
			<span class="font-semibold text-lg">Email</span>
			<input class="input peer" type="text" bind:value={formData.email} />
		</label>
		<div class="flex justify-center">
			<button type="reset" class="btn bg-initial">Limpar</button>
			<button class="btn variant-filled-secondary" on:click={onFormSubmit}>Editar</button>
		</div>
	</form>
</div>
