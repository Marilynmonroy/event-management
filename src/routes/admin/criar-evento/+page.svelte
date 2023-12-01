<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form action="post">
	<!-- Titulo do evento -->
	<!-- descriçao do evento -->
	<!-- localizaçao do evento -->
	<!-- imagem do evento -->
	<!-- data inicio -->
	<!-- hora de inicio -->xxx
	<!-- hora do final -->xxx
	<!-- categoria do evento -->
	<label class="label">
		<span>Input</span>
		<input class="input" type="text" placeholder="Input" />
	</label>

	<label class="label">
		<span>Select</span>
		<select class="select">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
		</select>
	</label>

	<label class="label">
		<span>Textarea</span>
		<textarea
			class="textarea"
			rows="4"
			placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
		/>
	</label>

	<input class="input" type="file" />

	<!-- inicio -->
	<label class="label">
		<p class="">Data da solicitação:</p>
		<input class="input" title="Input (time)" type="time" />
	</label>
</form>
