<script lang="ts">
	import type { PageData } from './$types';
	import Cards from '$lib/components/Cards/Cards.svelte';

	export let data: PageData;

	let inscription = data.inscriptions;
</script>

<div class="m-20">
	<h1 class="font-black text-4xl pb-10">Ingressos</h1>
	<Cards
		image={inscription.image}
		title={inscription.title}
		location={inscription.location}
		dataEvent={inscription.dataEvent}
		beginningEvent={inscription.beginningEvent}
		endEvent={inscription.endEvent}
	/>
</div>
