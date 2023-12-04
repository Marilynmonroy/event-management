<script lang="ts">
	import Cards from '$lib/components/Cards/Cards.svelte';
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	const toastStore = getToastStore();

	let inscription: any[] = [];

	onMount(async () => {
		const res = await fetch(`/api/events/${3}/inscriptions`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.ok) {
			const data = await res.json();
			inscription = data;

			console.log('Dentro', inscription);
		} else {
			const t: ToastSettings = {
				message: 'Erro ao carregar eventos',
				timeout: 3000
			};
			toastStore.trigger(t);
		}
	});
</script>

<div class="m-20">
	<h1 class="font-black text-4xl pb-10">Ingressos</h1>
	{#each inscription as userInscription}
		<Cards
			image={userInscription.image}
			title={userInscription.title}
			location={userInscription.location}
			dataEvent={userInscription.dataEvent}
			beginningEvent={userInscription.beginningEvent}
			endEvent={userInscription.endEvent}
		/>
	{/each}
</div>
