<script lang="ts">
	import { FileDropzone, type ToastSettings } from '@skeletonlabs/skeleton';
	import type { ActionData, PageData } from './$types';
	import { FileUp } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	export let data: PageData;
	export let form: ActionData;
	console.log(form);

	let categorias: any[] = [];
	// tem algum erro aqui
	onMount(async () => {
		const res = await fetch('/api/categorias', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.ok) {
			const data = await res.json();
			categorias = data.categorias;
		} else {
			console.log('erro', res.status);
		}
	});

	if (form?.status === 200) {
		const t: ToastSettings = {
			message: 'Evento criado com sucesso!',
			timeout: 3000,
			background: 'variant-ghost-secondary'
		};
		toastStore.trigger(t);
	} else if (form?.status === 400) {
		const t: ToastSettings = {
			message: 'Preencha todos os campos',
			background: 'variant-ghost-error',
			timeout: 3000
		};
		toastStore.trigger(t);
	}
</script>

<div class="flex flex-col w-full items-center">
	<h1 class="h2 p-5 font-bold">Bora criar o seu evento?</h1>
	<form action="?/criarEvento" method="post" class="card flex flex-col p-5 w-[85%] gap-3">
		<div class="flex w-full gap-5 items-end">
			<!------------------------- Titulo do evento -->
			<label class="label w-1/2">
				<span>Nome do Evento:</span>
				<input
					name="tituloEvento"
					class="input"
					type="text"
					placeholder="Ex. Burning Man"
				/>
			</label>
			<!------------------------- localizaçao do evento -->
			<label class="label w-1/2">
				<span>Localização:</span>
				<input
					class="input"
					type="text"
					name="localizacao"
					placeholder="Ex. Black Rock Desert, estado de Nevada, EUA"
				/>
			</label>
		</div>

		<div class="flex justify-between">
			<!------------------------- categoria do evento -->
			<label class="label w-1/4 2xl:w-[50%]">
				<span>Categoria:</span>
				<select name="categoria" class="select">
					<option value hidden>selecione uma categoria...</option>
					{#each categorias as categoria}
						<option value={categoria.name}>{categoria.name}</option>
					{/each}
				</select>
			</label>
			<div class="flex flex-col w-[30%] gap-1">
				<!------------------------- data inicio -->
				<label class="label flex items-center justify-end w-full gap-2">
					<span>Dia do evento:</span>
					<input name="diaEvento" class="input w-40" title="Input (date)" type="date" />
				</label>
				<!--------------------------- CAPACIDADE maxima -->
				<label class="label flex items-center justify-end gap-2">
					<span>Capacidade maxima:</span>
					<input
						name="capacidadeMaxima"
						class="input w-24 text-center"
						title="Input (number)"
						type="number"
						placeholder="&infin;"
					/>
				</label>
			</div>

			<div class="flex flex-col w-[30%] gap-1">
				<!------------------------- hora de inicio -->
				<label class="label flex items-center justify-end gap-3">
					<span>Inicio do Evento:</span>
					<input
						name="inicioEvento"
						class="input w-36"
						title="Input (time)"
						type="time"
					/>
				</label>

				<!------------------------- hora do final -->
				<label class="label flex items-center justify-end gap-3">
					<span>Final do Evento:</span>
					<input name="finalEvento" class="input w-36" title="Input (time)" type="time" />
				</label>
			</div>
		</div>

		<!------------------------- descriçao do evento -->
		<label class="label">
			<span>Descrição do evento:</span>
			<textarea
				name="descricao"
				class="textarea"
				rows="4"
				placeholder="Ex. Burning Man é um evento de experimento social colaborativo e de comunidade, podemos dizer também que é um evento de contracultura, realizado anualmente desde 1986 em Black Rock Desert, no estado americano de Nevada, costuma atrair mais de 50 mil pessoas"
			/>
		</label>

		<div>
			<span>Poster do evento:</span>
			<!------------------------- imagem do evento -->
			<FileDropzone name="imagemEvento" id="imagemEvento" enctype="multipart/form-data">
				<svelte:fragment slot="lead">
					<span class="flex w-full justify-center">
						<FileUp size={42} color="#1fd99b" />
					</span>
				</svelte:fragment>
				<svelte:fragment slot="message">
					<span class="font-bold">Clique para subir uma imagem</span> ou arraste o arquivo
				</svelte:fragment>
				<svelte:fragment slot="meta">PNG, JPG and GIF são permitidos</svelte:fragment>
			</FileDropzone>
		</div>
		<div class="flex justify-center pt-5 pb-3 gap-10">
			<button type="reset" class="btn bg-initial">Limpar</button>
			<button type="submit" class="btn variant-filled-secondary">Criar Evento</button>
		</div>
	</form>
</div>
