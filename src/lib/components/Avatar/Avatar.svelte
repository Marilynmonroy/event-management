<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		Avatar,
		getToastStore,
		ListBox,
		ListBoxItem,
		popup,
		type PopupSettings,
		type ToastSettings
	} from '@skeletonlabs/skeleton';
	const toastStore = getToastStore();

	const popupCombobox: PopupSettings = {
		event: 'click',
		target: 'popupCombobox',
		closeQuery: '.listbox-item'
	};

	let value: string;

	async function logout() {
		await fetch('/api/auth', {
			method: 'GET'
		});
		const t: ToastSettings = {
			message: `Bemvindo admin!`,
			timeout: 3000,
			background: 'variant-ghost-secondary'
		};
		toastStore.trigger(t);
		window.location.reload();
		goto('/');
	}

	async function userId(id: string) {
		const res = await fetch(`/api/users/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		console.log(data);

		goto(`/user/${data.id}`);
	}

	async function ingresos(id: string) {
		const res = await fetch(`/api/users/${id}/inscriptions`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		console.log(data);

		goto(`/user/${data.id}/inscriptions`);
	}
</script>

<button class="btn w-48 justify-between" use:popup={popupCombobox}>
	<Avatar initials="MA" background="bg-primary-500" />
	<span class="capitalize">{'Marilyn Aragón'}</span>
</button>

<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none">
		<button></button>
		<ListBoxItem
			bind:group={value}
			on:click={() => ingresos('3')}
			name="medium"
			value="ingresos">Ingressos</ListBoxItem
		>
		<ListBoxItem bind:group={value} on:click={() => userId('3')} name="medium" value="conta"
			>Minha conta</ListBoxItem
		>
		<ListBoxItem bind:group={value} on:click={logout} name="medium" value="logout"
			>Sair</ListBoxItem
		>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
