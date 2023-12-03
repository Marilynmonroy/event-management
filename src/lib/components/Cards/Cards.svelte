<script lang="ts">
	export let title: string;
	export let location: string;
	export let dataEvent: string;
	export let beginningEvent: string;
	export let endEvent: string;
</script>

<div class="card w-1/4">
	<a href="/" class="card-hover overflow-hidden">
		<header class="font-black text-2xl p-4">
			<h1>Imagen</h1>
		</header>
		<div class="p-4 space-y-4">
			<h2 class="font-semibold text-lg" data-toc-ignore>{title}</h2>
			<p>{location}</p>
			<div class="flex items-center w-full">
				<p>{dataEvent}</p>
				<ol class="breadcrumb w-full flex justify-end p-3">
					<li>{beginningEvent}</li>
					<li class="crumb-separator" aria-hidden>&rsaquo;</li>
					<li>{endEvent}</li>
				</ol>
			</div>
		</div>
		<hr class="opacity-50" />
		<footer class="py-2">
			<div>
				<button class="btn text-secondary-500"> Ver inscripção </button>
			</div>
			<div>
				<button class="btn text-primary-200">Cancelar inscripção</button>
			</div>
		</footer>
	</a>
</div>
