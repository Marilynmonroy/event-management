<script lang="ts">
	import { onMount } from 'svelte';
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();

	let dadosTable: any[] = [];

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
	let inscritos = 0;
</script>

<div class="flex flex-col overflow-x-auto w-full items-center pt-5">
	<table class="table w-11/12">
		<!-- head -->
		<thead>
			<tr>
				<th class="w-1/6"></th>
				<th class="w-1/6">Evento</th>
				<th class="w-1/6">Dia do evento</th>
				<th class="w-1/6">Incritos</th>
				<th class="w-1/6">Status</th>
				<th class="w-1/6"></th>
			</tr>
		</thead>
		<tbody>
			<!-- row 1 -->
			{#each dadosTable as evento}
				<tr class="h-20">
					<th class="p-2">
						<img
							src={evento.image}
							alt="img evento"
							class="h-20 rounded-xl object-cover"
						/>
					</th>
					<td class=" w-1/6">
						<div class="flex flex-col justify-center items-start">
							<div class="font-bold text-base">{evento.title}</div>
							<div class="text-sm opacity-50">{evento.location}</div>
						</div>
					</td>
					<td class="flex items-center w-1/6">
						<div class="font-bold text-base">
							{evento.dataEvent
								? new Date(evento.dataEvent).toLocaleDateString()
								: 'Erro na data'}
							<br />
							<span class="flex w-full text-xs text-gray-400"
								>{evento.beginningEvent} > {evento.endEvent}</span
							>
						</div>
					</td>
					<td class=" w-1/6">
						<div class="flex h-full justify-start items-center font-bold text-base">
							<span>{inscritos}/</span>{evento.capacity}
						</div>
					</td>
					<td class=" w-1/6">
						<div class="">
							<input type="checkbox" class="toggle toggle-success" checked />
						</div>
					</td>
					<th class="w-1/6">
						<button class="">details</button>
					</th>
				</tr>
			{/each}
		</tbody>
		<!-- foot -->
		<tfoot>
			<tr>
				<th></th>
				<th>Name</th>
				<th>Job</th>
				<th>Favorite Color</th>
				<th></th>
			</tr>
		</tfoot>
	</table>
</div>
