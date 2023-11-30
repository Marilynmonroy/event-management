<script lang="ts">
	import { AppRail, AppRailAnchor, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import {
		TreeView,
		TreeViewItem,
		RecursiveTreeView,
		type TreeViewNode
	} from '@skeletonlabs/skeleton';
	import { PartyPopper } from 'lucide-svelte';
	export let data: LayoutData;
</script>

<AppShell class="h-full">
	<!-- (header) -->
	<svelte:fragment slot="sidebarLeft">
		<TreeView class="variant-ghost-primary w-72 h-full ">
			<TreeViewItem>
				<span class="flex gap-5 items-center"
					><PartyPopper size={36} color="#1fd99b" /> Eventos</span
				>
				<svelte:fragment slot="children">
					<TreeViewItem>Novo evento</TreeViewItem>
					<TreeViewItem>Eventos criados</TreeViewItem>
				</svelte:fragment>
			</TreeViewItem>
			<TreeViewItem>
				(item 1)
				<svelte:fragment slot="children">
					<TreeViewItem>(Child 1)</TreeViewItem>
					<TreeViewItem>(Child 2)</TreeViewItem>
				</svelte:fragment>
			</TreeViewItem>
			<TreeViewItem>
				(item 1)
				<svelte:fragment slot="children">
					<TreeViewItem>(Child 1)</TreeViewItem>
					<TreeViewItem>(Child 2)</TreeViewItem>
				</svelte:fragment>
			</TreeViewItem>
		</TreeView>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<!-- ---- / ---- -->
	<slot />

	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
