<script lang="ts">
	import '../app.postcss';
	import ModalRegister from '$lib/components/modals/ModalRegister.svelte';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import {
		AppShell,
		AppBar,
		Modal,
		initializeStores,
		storePopup,
		getModalStore,
		type ModalComponent,
		type ModalSettings
	} from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();
	const modalStore = getModalStore();

	const modalComponent: Record<string, ModalComponent> = {
		modalRegistry: { ref: ModalRegister }
	};

	function viewModal() {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalRegistry',
			title: 'Bem-vindo ao Eventure'
		};
		modalStore.trigger(modal);
	}
</script>

<!-- App Shell -->

<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="2" gap="2">
			<svelte:fragment slot="lead">
				<div class="justify-end items-end">
					<a href="/admin" class="btn bg-initial" data-sveltekit-preload-data="hover"
						>Seja um admin</a
					>
					<button class="btn bg-initial"> Accesse sua conta </button>
					<button on:click={viewModal} class="btn variant-filled-primary">
						Cadastre-se
					</button>
					<Modal components={modalComponent} />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
