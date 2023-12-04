<script lang="ts">
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';

	export const dadosTable: any[] = [];

	console.log(dadosTable.length);

	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Name', 'Symbol', 'Weight'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(dadosTable, ['name', 'symbol', 'weight']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(dadosTable, ['position', 'name', 'symbol', 'weight']),
		// Optional: A list of footer labels.
		foot: ['Total', '', '<code class="code">5</code>']
	};
</script>

<Table source={tableSimple} {dadosTable} />
