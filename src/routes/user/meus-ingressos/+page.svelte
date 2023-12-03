<script lang="ts">
	import Cards from '$lib/components/Cards/Cards.svelte';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;
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
				<Cards
					title="Hola"
					location="Lajeado"
					dataEvent="Hoy"
					beginningEvent="10:30"
					endEvent="12:30"
				/>
			{:else if tabSet === 1}
				(ingressos inativos)
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
