<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	let elemMovies: HTMLDivElement;

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
	let moviesData = [
		{
			name: 'The Shawshank Redemption',
			url: 'https://www.imdb.com/title/tt0111161/',
			imageUrl: 'https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg'
		},
		{
			nome: 'The Godfather',
			url: 'https://www.imdb.com/title/tt0068646/',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/a/af/The_Godfather%2C_The_Game.jpg'
		},
		{
			name: 'The Dark Knight',
			url: 'https://www.imdb.com/title/tt0468569/',
			imageUrl:
				'https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
		},
		{
			name: 'The Godfather: Part II',
			url: 'https://www.imdb.com/title/tt0071562/',
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
		},
		{
			name: "Schindler's List",
			url: 'https://www.imdb.com/title/tt0108052/',
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
		},
		{
			name: 'The Lord of the Rings: The Return of the King',
			url: 'https://www.imdb.com/title/tt0167260/',
			imageUrl:
				'https://musicart.xboxlive.com/7/8d8d5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
		},
		{
			name: 'The Shawshank Redemption',
			url: 'https://www.imdb.com/title/tt0111161/',
			imageUrl: 'https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg'
		},
		{
			nome: 'The Godfather',
			url: 'https://www.imdb.com/title/tt0068646/',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/a/af/The_Godfather%2C_The_Game.jpg'
		},
		{
			name: 'The Dark Knight',
			url: 'https://www.imdb.com/title/tt0468569/',
			imageUrl:
				'https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
		},
		{
			name: 'The Godfather: Part II',
			url: 'https://www.imdb.com/title/tt0071562/',
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
		},
		{
			name: "Schindler's List",
			url: 'https://www.imdb.com/title/tt0108052/',
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
		},
		{
			name: 'The Lord of the Rings: The Return of the King',
			url: 'https://www.imdb.com/title/tt0167260/',
			imageUrl:
				'https://musicart.xboxlive.com/7/8d8d5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
		},
		{
			name: 'The Shawshank Redemption',
			url: 'https://www.imdb.com/title/tt0111161/',
			imageUrl: 'https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg'
		},
		{
			nome: 'The Godfather',
			url: 'https://www.imdb.com/title/tt0068646/',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/a/af/The_Godfather%2C_The_Game.jpg'
		},
		{
			name: 'The Dark Knight',
			url: 'https://www.imdb.com/title/tt0468569/',
			imageUrl:
				'https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
		},
		{
			name: 'The Godfather: Part II',
			url: 'https://www.imdb.com/title/tt0071562/',
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
		},
		{
			name: "Schindler's List",
			url: 'https://www.imdb.com/title/tt0108052/',
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
		},
		{
			name: 'The Lord of the Rings: The Return of the King',
			url: 'https://www.imdb.com/title/tt0167260/',
			imageUrl:
				'https://musicart.xboxlive.com/7/8d8d5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
		},
		{
			name: 'The Shawshank Redemption',
			url: 'https://www.imdb.com/title/tt0111161/',
			imageUrl: 'https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg'
		},
		{
			nome: 'The Godfather',
			url: 'https://www.imdb.com/title/tt0068646/',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/a/af/The_Godfather%2C_The_Game.jpg'
		},
		{
			name: 'The Dark Knight',
			url: 'https://www.imdb.com/title/tt0468569/',
			imageUrl:
				'https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
		},
		{
			name: 'The Godfather: Part II',
			url: 'https://www.imdb.com/title/tt0071562/',
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
		},
		{
			name: "Schindler's List",
			url: 'https://www.imdb.com/title/tt0108052/',
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
		},
		{
			name: 'The Lord of the Rings: The Return of the King',
			url: 'https://www.imdb.com/title/tt0167260/',
			imageUrl:
				'https://musicart.xboxlive.com/7/8d8d5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
		},
		{
			name: 'The Shawshank Redemption',
			url: 'https://www.imdb.com/title/tt0111161/',
			imageUrl: 'https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg'
		},
		{
			nome: 'The Godfather',
			url: 'https://www.imdb.com/title/tt0068646/',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/a/af/The_Godfather%2C_The_Game.jpg'
		},
		{
			name: 'The Dark Knight',
			url: 'https://www.imdb.com/title/tt0468569/',
			imageUrl:
				'https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
		},
		{
			name: 'The Godfather: Part II',
			url: 'https://www.imdb.com/title/tt0071562/',
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
		},
		{
			name: "Schindler's List",
			url: 'https://www.imdb.com/title/tt0108052/',
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
		},
		{
			name: 'The Lord of the Rings: The Return of the King',
			url: 'https://www.imdb.com/title/tt0167260/',
			imageUrl:
				'https://musicart.xboxlive.com/7/8d8d5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
		},
		{
			name: 'The Shawshank Redemption',
			url: 'https://www.imdb.com/title/tt0111161/',
			imageUrl: 'https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF1000,1000_QL80_.jpg'
		},
		{
			nome: 'The Godfather',
			url: 'https://www.imdb.com/title/tt0068646/',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/a/af/The_Godfather%2C_The_Game.jpg'
		},
		{
			name: 'The Dark Knight',
			url: 'https://www.imdb.com/title/tt0468569/',
			imageUrl:
				'https://musicart.xboxlive.com/7/abb02f00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
		},
		{
			name: 'The Godfather: Part II',
			url: 'https://www.imdb.com/title/tt0071562/',
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
		},
		{
			name: "Schindler's List",
			url: 'https://www.imdb.com/title/tt0108052/',
			imageUrl:
				'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
		},
		{
			name: 'The Lord of the Rings: The Return of the King',
			url: 'https://www.imdb.com/title/tt0167260/',
			imageUrl:
				'https://musicart.xboxlive.com/7/8d8d5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
		}
	];
</script>

<div class="flex gap-3 px-16 items-center">
	<!-- Button: Left -->

	<button type="button" class="btn-icon h-fit" on:click={multiColumnLeft}>
		<ChevronLeft strokeWidth={3} size={50} color="#1fd99b" /></button
	>
	<!-- Carousel -->
	<div
		bind:this={elemMovies}
		class="flex snap-x snap-mandatory gap-5 scroll-smooth overflow-x-auto"
	>
		{#each moviesData as movie}
			<a
				href={movie.url}
				target="_blank"
				class="flex flex-col justify-between w-[23rem] h-80 snap-center shrink-0 border-2 card border-secondary-500 border-opacity-30"
			>
				<img
					src={movie.imageUrl}
					class="hover:brightness-125 rounded-md object-cover h-36 rounded-t-xl"
					alt="imagem do filme"
				/>
				<div>
					<p class="h4 font-semibold p-3">Nome do evento</p>
					<p>
						Um texto aleatorio para testar o tamanho do texto e ver se ele vai quebrar
						ou não e se vai ficar bonito ou não, que e raro
					</p>
				</div>
				<ol class="breadcrumb w-full flex justify-end p-3">
					<li>Breadcrumbs</li>

					<li class="crumb-separator" aria-hidden>&rsaquo;</li>
					<li>Breadcrumbs</li>
				</ol>
			</a>
		{/each}
	</div>

	<!-- Button-Right -->
	<button type="button" class="btn-icon h-fit" on:click={multiColumnRight}>
		<ChevronRight strokeWidth={3} size={50} color="#1fd99b" />
	</button>
</div>
