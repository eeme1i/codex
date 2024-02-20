<script lang="ts">
	import type { Book } from '$lib/types';
	import BookIcon from './book-icon.svelte';
	export let books: Book[];

	let colors: string[] = [
		'#FFC0CB',
		'#FFB6C1',
		'#FF69B4',
		'#FF1493',
		'#DB7093',
		'#C71585',
		'#FFA07A',
		'#FA8072',
		'#E9967A',
		'#F08080',
		'#CD5C5C',
		'#DC143C',
		'#B22222',
		'#8B0000',
		'#FF0000',
		'#FF6347',
		'#FF4500',
		'#FF8C00',
		'#FFA500',
		'#FFD700',
		'#FFFF00',
		'#FFD700',
		'#FFA500',
		'#FF8C00',
		'#FF4500',
		'#FF6347',
		'#FF0000',
		'#8B0000',
		'#B22222',
		'#DC143C',
		'#CD5C5C',
		'#F08080',
		'#E9967A',
		'#FA8072',
		'#FFA07A',
		'#C71585',
		'#DB7093',
		'#FF1493',
		'#FF69B4',
		'#FFB6C1',
		'#FFC0CB'
	];

	let randomColor = colors[Math.floor(Math.random() * colors.length)];
</script>

<div class="flex gap-4">
	{#each books as book (book.id)}
		<a href="/books/{book.id}">
			<BookIcon title={book.title} height={172} />
		</a>
	{/each}
</div>
