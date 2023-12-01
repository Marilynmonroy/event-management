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
	<h1 class="h2 p-5">Bora criar o seu evento?</h1>
	<form action="?/criarEvento" method="post" class="card p-3">
		<!------------------------- Titulo do evento -->
		<label class="label">
			<span>Titulo do Evento:</span>
			<input name="tituloEvento" class="input" type="text" placeholder="Input" />
		</label>

		<div class="flex">
			<!------------------------- localizaçao do evento -->
			<label class="label">
				<span>localização:</span>
				<input class="input" type="text" placeholder="Input" />
			</label>

			<!------------------------- categoria do evento -->
			<label class="label">
				<span>Categoria:</span>
				<select name="categoria" class="select">
					<option value hidden>selecione uma...</option>
					{#each categorias as categoria}
						<option value={categoria.name}>{categoria.name}</option>
					{/each}
				</select>
			</label>
			<!--------------------------- CAPACIDADE maxima -->
			<label class="label w-28">
				<span>Capacidade maxima:</span>
				<input name="capacidadeMaxima" class="input" title="Input (number)" type="number" />
			</label>
		</div>

		<!------------------------- descriçao do evento -->
		<label class="label">
			<span>Descrição do evento:</span>
			<textarea
				name="descricao"
				class="textarea"
				rows="4"
				placeholder="Descreva o evento aqui..."
			/>
		</label>
		<div>
			<!------------------------- data inicio -->
			<label class="label">
				<span>Dia do evento:</span>
				<input name="diaEvento" class="input" title="Input (date)" type="date" />
			</label>

			<!------------------------- hora de inicio -->
			<label class="label">
				<span>Inicio do Evento:</span>
				<input name="inicioEvento" class="input" title="Input (time)" type="time" />
			</label>

			<!------------------------- hora do final -->
			<label class="label">
				<span>Final do Evento:</span>
				<input name="finalEvento" class="input" title="Input (time)" type="time" />
			</label>
		</div>
		<!------------------------- imagem do evento -->

		<FileDropzone name="imagemEvento">
			<svelte:fragment slot="lead">
				<span class="flex w-full justify-center">
					<FileUp size={36} color="#1fd99b" />
				</span>
			</svelte:fragment>
			<svelte:fragment slot="message">
				<span class="font-bold">Upar imagem</span> ou arraste o arquivo
			</svelte:fragment>
			<svelte:fragment slot="meta">PNG, JPG and GIF são permitidos</svelte:fragment>
		</FileDropzone>
		<div>
			<button class="btn bg-initial">Cancelar</button>
			<button class="btn variant-filled-primary">Criar Evento</button>
		</div>
	</form>
</div>
