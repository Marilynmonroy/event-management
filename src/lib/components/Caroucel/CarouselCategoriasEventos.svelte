<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	let elemMovies: HTMLDivElement;
	import logo1 from '$lib/assets/icons/ferris-wheel.svg';
	import logo2 from '$lib/assets/icons/guitar.svg';
	import logo3 from '$lib/assets/icons/party-popper.svg';
	import logo4 from '$lib/assets/icons/hand-metal.svg';
	import logo5 from '$lib/assets/icons/tent-tree.svg';
	import logo6 from '$lib/assets/icons/pencil-ruler.svg';
	function multiColumnLeft(): void {
		let x = elemMovies.scrollWidth;
		if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
		elemMovies.scroll(x, 0);
	}

	function multiColumnRight(): void {
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1)
			x = elemMovies.scrollLeft + elemMovies.clientWidth;
		elemMovies.scroll(x, 0);
	}
	let categoriaEventos = [
		{
			titulo: 'Festivais',
			logo: logo1
		},
		{
			titulo: 'Musica ao vivo',
			logo: logo2
		},
		{
			titulo: 'Festas',
			logo: logo3
		},
		{
			titulo: 'Shows',
			logo: logo4
		},
		{
			titulo: 'Camping',
			logo: logo5
		},
		{
			titulo: 'Cursos',
			logo: logo6
		}
	];
</script>

<div class="flex">
	<!-- Button: Left -->
	<!-- <button type="button" on:click={multiColumnLeft}>
		<ChevronLeft strokeWidth={3} />
	</button> -->
	<!-- Carousel -->
	<div
		bind:this={elemMovies}
		class="flex snap-x snap-mandatory scroll-smooth overflow-x-auto w-full gap-3 shrink-0"
	>
		{#each categoriaEventos as movie}
			<button
				type="button"
				class="btn-icon w-28 variant-soft-primary hover:border-primary-500"
				><img src={movie.logo} alt="img" class="w-20" /></button
			>
		{/each}
	</div>

	<!-- Button-Right -->
	<!-- <button type="button" on:click={multiColumnRight}>
		<ChevronRight strokeWidth={3} />
	</button> -->
</div>
