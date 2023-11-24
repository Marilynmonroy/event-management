<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);

	let todosUsuariosDoBanco = data.body.allUsers;
</script>

<form action="?/criarTeste" method="post">
	<div class="flex gap-5">
		<label class="label">
			<span>Nome Teste</span>
			<input class="input" type="text" placeholder="Input" name="nomeTeste" />
		</label>
		<label class="label">
			<span>Senha Teste</span>
			<input class="input" type="text" placeholder="Input" name="senhaTeste" />
		</label>
	</div>
	<button type="submit" class="btn variant-filled-primary">Criar</button>
</form>

<!-- aqui vai mostrar todos os users que carregam na Load Function -->
<div class="flex flex-col">
	<p>dados do user criado</p>
	<p>--------------------------------------</p>
	{#each todosUsuariosDoBanco as user}
		<p>{user.nomeDoBanco}</p>
		<p>{user.senhaDoBanco}</p>
		<p>---------------------------------</p>
	{/each}
</div>
