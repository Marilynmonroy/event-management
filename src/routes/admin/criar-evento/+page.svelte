<script lang="ts">
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { FileUp } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let data: PageData;
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
			<label class="label w-1/3">
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
				<label class="label flex items-center justify-between w-full">
					<span class="w-full">Dia do evento:</span>
					<input name="diaEvento" class="input w-full" title="Input (date)" type="date" />
				</label>
				<!--------------------------- CAPACIDADE maxima -->
				<label class="label flex items-center justify-between">
					<span>Capacidade maxima:</span>
					<input
						name="capacidadeMaxima"
						class="input w-36 text-center"
						title="Input (number)"
						type="number"
						placeholder="&infin;"
					/>
				</label>
			</div>

			<div class="flex flex-col w-[30%] gap-1">
				<!------------------------- hora de inicio -->
				<label class="label flex items-center justify-between">
					<span>Inicio do Evento:</span>
					<input
						name="inicioEvento"
						class="input w-36"
						title="Input (time)"
						type="time"
					/>
				</label>

				<!------------------------- hora do final -->
				<label class="label flex items-center justify-between">
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
			<FileDropzone name="imagemEvento">
				<svelte:fragment slot="lead">
					<span class="flex w-full justify-center">
						<FileUp size={42} color="#1fd99b" />
					</span>
				</svelte:fragment>
				<svelte:fragment slot="message">
					<span class="font-bold">Clique parasubir uma imagem</span> ou arraste o arquivo
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
