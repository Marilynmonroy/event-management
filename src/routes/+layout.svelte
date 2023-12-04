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
		type ModalSettings,
		Toast
	} from '@skeletonlabs/skeleton';
	import ModalLogin from '$lib/components/modals/ModalLogin.svelte';
	import ModalRegister from '$lib/components/modals/ModalRegister.svelte';
	import { LogOut } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import Avatar from '../lib/components/Avatar/Avatar.svelte';

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
	export let data;
	async function logout() {
		await fetch('/api/auth', {
			method: 'GET'
		});
		window.location.reload();
		goto('/');
	}
</script>

<Toast position="br" padding="mb-3 mr-2 p-5" />

<!-- App Shell -->

<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="2" gap="2" class="border-b border-primary-500  border-opacity-50">
			<svelte:fragment slot="lead">
				<a href="/" class="font-bold text-3xl">Eventure</a>
				{#if data.session === 'GUEST'}
					<div class="flex w-[20%] justify-between items-center">
						<button on:click={viewModalLogin} class="btn"> Accesse sua conta </button>
						<button on:click={viewModal} class="btn variant-ghost-primary">
							Cadastre-se
						</button>
						<Modal components={modalComponent} />
					</div>
				{:else if data.session === 'USER'}
					<div class="flex">
						<Avatar />
					</div>
				{:else if data.session === 'ADMIN'}
					<div class="flex w-[15%] justify-between items-center pr-4">
						<a href="/admin/criar-evento" class="btn variant-ghost-primary">
							Painel Admin</a
						>
						<button on:click={logout}><LogOut /></button>
					</div>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<main class="h-full w-full">
		<slot />
	</main>
</AppShell>
