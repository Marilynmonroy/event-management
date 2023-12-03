<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		Avatar,
		ListBox,
		ListBoxItem,
		popup,
		type PopupSettings
	} from '@skeletonlabs/skeleton';

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
		goto('/');
	}

	function ingresos() {
		goto('/user/meus-ingressos');
	}
	function conta() {
		goto('/user/conta');
	}
</script>

<button class="btn w-48 justify-between" use:popup={popupCombobox}>
	<Avatar initials="JD" background="bg-primary-500" />
	<span class="capitalize">{'Nome do user'}</span>
</button>

<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none">
		<ListBoxItem bind:group={value} on:click={ingresos} name="medium" value="ingresos"
			>Ingressos</ListBoxItem
		>
		<ListBoxItem bind:group={value} on:click={conta} name="medium" value="conta"
			>Minha conta</ListBoxItem
		>
		<ListBoxItem bind:group={value} on:click={logout} name="medium" value="logout"
			>Sair</ListBoxItem
		>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
