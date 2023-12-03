<script lang="ts">
	import Cards from '$lib/components/Cards/Cards.svelte';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	export let data;
	let tabSet: number = 0;
	let inscriptions = data.inscription;
	console.log(data.inscription);
</script>

<div class="m-20">
	<h1 class="font-black text-4xl pb-10">Ingressos</h1>
	<TabGroup active="font-black border-b-2" hover="hover:text-primary-500">
		<Tab bind:group={tabSet} name="ativo" value={0}>
			<span>Ativos</span>
		</Tab>
		<Tab bind:group={tabSet} name="encerrado" value={1}>Encerrados</Tab>
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				{#each inscriptions as inscription (inscription.id)}
					<Cards
						title={inscription.title}
						location={inscription.location}
						dataEvent={inscription.dataEvent}
						beginningEvent={inscription.beginningEvent}
						endEvent={inscription.endEvent}
					/>
				{/each}
			{:else if tabSet === 1}
				<p>Ingresos inactivos</p>
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
