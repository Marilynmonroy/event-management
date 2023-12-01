<script lang="ts">
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { FileUp } from 'lucide-svelte';

	export let data: PageData;
</script>

<form action="post">
	<!------------------------- Titulo do evento -->
	<label class="label">
		<span>Input</span>
		<input class="input" type="text" placeholder="Input" />
	</label>
	<!--------------------------- CAPACIDADE maxima -->
	<input class="input" title="Input (number)" type="number" />
	<!------------------------- descriçao do evento -->
	<label class="label">
		<span>Textarea</span>
		<textarea
			class="textarea"
			rows="4"
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
		/>
	</label>
	<!------------------------- localizaçao do evento -->
	<label class="label">
		<span>Input</span>
		<input class="input" type="text" placeholder="Input" />
	</label>
	<!------------------------- imagem do evento -->
	<FileDropzone name="files">
		<svelte:fragment slot="lead"
			><span class="flex w-full justify-center"><FileUp size={36} color="#1fd99b" /></span
			></svelte:fragment
		>
		<svelte:fragment slot="message"
			><span>Upar imagem</span> ou arraste o arquivo</svelte:fragment
		>
		<svelte:fragment slot="meta">PNG, JPG and GIF são permitidos</svelte:fragment>
	</FileDropzone>

	<!------------------------- data inicio -->
	<label class="label">
		<span>data</span>
		<input class="input" title="Input (date)" type="date" />
	</label>

	<!------------------------- hora de inicio -->xxx
	<label class="label">
		<span>Hora de inicio</span>
		<input class="input" title="Input (time)" type="time" />
	</label>

	<!------------------------- hora do final -->xxx
	<label class="label">
		<span>Hora do final</span>
		<input class="input" title="Input (time)" type="time" />
	</label>

	<!------------------------- categoria do evento -->
	<label class="label">
		<span>Categorias</span>
		<select class="select">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
		</select>
	</label>
</form>
