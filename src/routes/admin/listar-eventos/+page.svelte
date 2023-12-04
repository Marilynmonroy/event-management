<script lang="ts">
	import { onMount } from 'svelte';
	import {
		getToastStore,
		SlideToggle,
		type PopupSettings,
		type ToastSettings,
		popup
	} from '@skeletonlabs/skeleton';
	import { PenSquare, XCircle } from 'lucide-svelte';
	const toastStore = getToastStore();

	let dadosTable: any[] = [];
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

	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'left'
	};
</script>

<div class="flex flex-col overflow-x-auto w-full items-center pt-5">
	<table class="table w-11/12">
		<!-- head -->
		<thead>
			<tr>
				<th class="w-[16%]"></th>
				<th class="w-[30%]">Evento</th>
				<th class="w-[15%]">Dia do evento</th>
				<th class="w-[10%]">Incritos</th>
				<th class="w-[10%]">Status</th>
				<th class="w-[19%]"></th>
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
					<td class="flex items-center h-20">
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
						<div class="flex justify-center items-center">
							<button class="btn variant-filled" use:popup={popupFeatured}>
								Show Popup
							</button>
						</div>
						<div class="card p-4 w-40 shadow-xl" data-popup="popupFeatured">
							<div class="flex flex-col gap-2">
								<button type="button" class="btn variant-filled">
									<span><PenSquare /> </span>
									<span>Editar</span>
								</button>
								<button type="button" class="btn variant-filled">
									<span><XCircle /> </span>
									<span>Deletar</span>
								</button>

								<button type="button" class="btn variant-filled">
									<span>(icon)</span>
									<span>Button</span>
								</button>
							</div>
						</div>
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
