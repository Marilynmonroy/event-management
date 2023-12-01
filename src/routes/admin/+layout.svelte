<script lang="ts">
	import { AppShell, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import type { LayoutData } from './$types';
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import { PartyPopper, UserRoundCog } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let data: LayoutData;

	let menuSelecionado: string = '';
</script>

<div class="flex h-full">
	<!-- (header) -->
	<TreeView class="flex flex-col min-w-[16rem] max-w-[16rem] card h-full ">
		<TreeViewItem open>
			<span class="flex gap-5 items-center btn justify-center text-secondary-500">
				<PartyPopper size={36} color="#1fd99b" /> Eventos
			</span>
			<svelte:fragment slot="children">
				<ListBox class=" pr-5 ">
					<ListBoxItem
						bind:group={menuSelecionado}
						name="criar-evento"
						value="criar-evento"
						active="variant-ghost-primary"
						class={$page.url.pathname === '/admin/criar-evento' &&
							'variant-ghost-primary hover:variant-outline-secondary'}
						on:click={() => goto('/admin/criar-evento')}
					>
						Criar Evento
					</ListBoxItem>
					<ListBoxItem
						bind:group={menuSelecionado}
						name="eventos-ativos"
						value="eventos-ativos"
						active="variant-ghost-primary"
						class={$page.url.pathname === '/admin/eventos-ativos' &&
							'variant-ghost-primary hover:variant-outline-secondary'}
						on:click={() => goto('/admin/eventos-ativos')}
					>
						Eventos Ativos
					</ListBoxItem>

					<ListBoxItem
						bind:group={menuSelecionado}
						name="listar-eventos"
						value="listar-eventos"
						active="variant-ghost-primary"
						class={$page.url.pathname === '/admin/listar-eventos' &&
							'variant-ghost-primary hover:variant-outline-secondary'}
						on:click={() => goto('/admin/listar-eventos')}
					>
						Listar Eventos
					</ListBoxItem>
				</ListBox>
			</svelte:fragment>
		</TreeViewItem>
		<TreeViewItem>
			<span class="flex gap-5 items-center btn text-secondary-500"
				><UserRoundCog size={36} color="#1fd99b" />Conta</span
			>
			<svelte:fragment slot="children">
				<ListBox class=" pr-5">
					<ListBoxItem
						bind:group={menuSelecionado}
						name="usuario"
						value="usuario"
						active="variant-ghost-primary"
						class={$page.url.pathname === '/admin/usuario' &&
							'variant-ghost-primary hover:variant-outline-secondary'}
						on:click={() => goto('/admin/usuario')}
					>
						Usuario
					</ListBoxItem>
					<ListBoxItem
						bind:group={menuSelecionado}
						name="relatorios"
						value="relatorios"
						active="variant-ghost-primary"
						class={$page.url.pathname === '/admin/relatorios' &&
							'variant-ghost-primary hover:variant-outline-secondary'}
						on:click={() => goto('/admin/relatorios')}
					>
						Relatorios
					</ListBoxItem>
				</ListBox>
			</svelte:fragment>
		</TreeViewItem>
	</TreeView>

	<slot />
</div>
