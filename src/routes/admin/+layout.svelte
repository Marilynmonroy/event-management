<script lang="ts">
	import { AppRail, AppRailAnchor, AppRailTile, AppShell } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import {
		TreeView,
		TreeViewItem,
		RecursiveTreeView,
		type TreeViewNode
	} from '@skeletonlabs/skeleton';
	export let data: LayoutData;
</script>

<AppShell>
	<!-- (header) -->
	<svelte:fragment slot="sidebarLeft">
		<TreeView>
			<TreeViewItem>
				Eventos
				<svelte:fragment slot="children">
					<TreeViewItem>
						(Child 1)
						<svelte:fragment slot="children">
							<TreeViewItem>(Child of Child 1)</TreeViewItem>
							<TreeViewItem>(Child of Child 2)</TreeViewItem>
						</svelte:fragment>
					</TreeViewItem>
					<TreeViewItem>(Child 2)</TreeViewItem>
				</svelte:fragment>
			</TreeViewItem>
			<TreeViewItem>
				(item 1)
				<svelte:fragment slot="children">
					<TreeViewItem>
						(Child 1)
						<svelte:fragment slot="children">
							<TreeViewItem>(Child of Child 1)</TreeViewItem>
							<TreeViewItem>(Child of Child 2)</TreeViewItem>
						</svelte:fragment>
					</TreeViewItem>
					<TreeViewItem>(Child 2)</TreeViewItem>
				</svelte:fragment>
			</TreeViewItem>
			<TreeViewItem>
				(item 1)
				<svelte:fragment slot="children">
					<TreeViewItem>
						(Child 1)
						<svelte:fragment slot="children">
							<TreeViewItem>(Child of Child 1)</TreeViewItem>
							<TreeViewItem>(Child of Child 2)</TreeViewItem>
						</svelte:fragment>
					</TreeViewItem>
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
