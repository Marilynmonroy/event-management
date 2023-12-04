<script lang="ts">
	import { onMount } from 'svelte';
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { PencilLine, XCircle } from 'lucide-svelte';

	const toastStore = getToastStore();

	let dadosTable: any[] = [];
	$: dadosTable;
	let inscritos = 0;

	onMount(async () => {
		const res = await fetch('/api/events', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.ok) {
			const data = await res.json();
			dadosTable = data;

			console.log('Dentro', dadosTable);
		} else {
			const t: ToastSettings = {
				message: 'Erro ao carregar eventos',
				timeout: 3000
			};
			toastStore.trigger(t);
		}
	});
	async function deletarEvento(id: string) {
		const res = await fetch(`/api/events/${id}`, {
			method: 'DELETE'
		});

		if (res.ok) {
			const t: ToastSettings = {
				message: 'Evento deletado com sucesso!',
				timeout: 3000,
				background: 'variant-ghost-secondary'
			};
			toastStore.trigger(t);
			// Recarrega a página após a exclusão bem-sucedida
			window.location.reload();
		} else {
			const t: ToastSettings = {
				message: 'Erro ao deletar o evento!',
				timeout: 3000,
				background: 'variant-ghost-error'
			};
			toastStore.trigger(t);
		}
	}
	// ----------------------------------------------------------------------------

	async function editarEvento(id: string) {
		// const res = await fetch(`/api/events/${id}`, {
		// 	method: 'PATCH'
		// });
		showModal = true;
	}
	import Modal from '$lib/components/modals/ModalEditar.svelte';

	let showModal = false;
</script>

<Modal bind:showModal>
	<form action="" class="">
		<label class="label">
			<span class="text-white">Input</span>
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
		<div class="w-full">
			<!-- <button class="btn">Cancelar</button> -->
			<button type="submit" class="btn variant-ghost-secondary">Salvar</button>
		</div>
	</form>
</Modal>

<div class="flex flex-col overflow-x-auto w-full items-center pt-5">
	<table class="table w-11/12">
		<!-- head -->
		<thead>
			<tr>
				<th class="w-[15%]"></th>
				<th class="w-[30%]">Evento</th>
				<th class="w-[15%]">Dia do evento</th>
				<th class="w-[15%]">Incritos</th>
				<th class="w-[10%]">Status</th>
				<th class="w-[15%]"></th>
			</tr>
		</thead>
		<tbody>
			<!-- row 1 -->
			{#each dadosTable as evento}
				<tr class="h-20">
					<th class="p-2">
						<div class="flex justify-start items-center h-20">
							<img
								src={evento.image}
								alt="img evento"
								class="h-20 rounded-xl object-cover"
							/>
						</div>
					</th>
					<td class="  h-20">
						<div class="flex flex-col justify-center h-20">
							<div class="font-bold text-base">{evento.title}</div>
							<div class="text-sm opacity-50">{evento.location}</div>
						</div>
					</td>
					<td class=" h-20">
						<div class="flex flex-col h-20 justify-center">
							<div class="w-full">
								{evento.dataEvent
									? new Date(evento.dataEvent).toLocaleDateString()
									: 'Erro na data'}
							</div>
							<div class="flex w-full text-xs text-gray-400">
								{evento.beginningEvent} > {evento.endEvent}
							</div>
						</div>
					</td>
					<td class="  h-20">
						<div class="flex h-full justify-start items-center font-bold text-base">
							<span>{inscritos}/</span>{evento.capacity}
						</div>
					</td>
					<td class="  h-20">
						<div class="flex justify-start items-center h-20">
							{#if evento.status}
								<span class="badge variant-filled-secondary">Ativo</span>
							{:else}
								<span class="badge variant-ringed-error">Inativo</span>
							{/if}
						</div>
					</td>
					<th class=" h-20">
						<div class="flex justify-evenly items-center gap-6">
							<button on:click={() => editarEvento(evento.id)}>
								<PencilLine size={32} />
							</button>
							<button on:click={() => deletarEvento(evento.id)}>
								<XCircle color="#c11f48" size={32} />
							</button>
						</div>
					</th>
				</tr>
			{/each}
		</tbody>
		<!-- foot -->
		<!-- <tfoot>
			<tr>
				<th></th>
				<th>Name</th>
				<th>Job</th>
				<th>Favorite Color</th>
				<th></th>
			</tr>
		</tfoot> -->
	</table>
</div>
