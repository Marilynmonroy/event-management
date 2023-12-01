<script lang="ts">
	import '../app.postcss';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
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
	import ModalLogin from '$lib/components/modals/ModalLogin.svelte';
	import ModalRegister from '$lib/components/modals/ModalRegister.svelte';

	initializeStores();
	const modalStore = getModalStore();

	const modalComponent: Record<string, ModalComponent> = {
		modalRegistry: { ref: ModalRegister },
		modalLogin: { ref: ModalLogin }
	};

	function viewModal() {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalRegistry',
			title: 'Bem-vindo ao Eventure'
		};
		modalStore.trigger(modal);
	}
	function viewModalLogin() {
		const modal: ModalSettings = {
			type: 'component',
			component: 'modalLogin',
			title: 'Entre na sua conta!'
		};
		modalStore.trigger(modal);
	}
</script>

<!-- App Shell -->

<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="2" gap="2" class="border-b border-primary-500  border-opacity-50">
			<svelte:fragment slot="lead">
				<a href="/" class="font-bold text-3xl">Eventure</a>
				<div class="flex justify-end items-end">
					<a href="/admin/eventos-ativos" class="btn bg-initial"> Seja admin </a>
					<button on:click={viewModalLogin} class="btn"> Accesse sua conta </button>
					<button on:click={viewModal} class="btn variant-filled-primary">
						Cadastre-se
					</button>
					<Modal components={modalComponent} />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<main class="h-full">
		<slot />
	</main>
</AppShell>
