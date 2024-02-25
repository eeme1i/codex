<script lang="ts">
	import { writable } from 'svelte/store';
	import type { Book } from '$lib/types';
	import MainBook from '../components/main-book.svelte';
	import AllBooks from '../components/all-books.svelte';
	import CreateBook from '../components/create-book.svelte';

	export let data;

	console.log(data);

	let sampleBook: Book = {
		id: 1,
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		pageCount: 300,
		currentPage: 100,
		createdAt: new Date(),
		updatedAt: new Date()
	};

	const bookStore = writable(sampleBook);

	let books: Book[] = data.books;
	$: books = books;

	let latestBook: Book = [...books].sort(
		(a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
	)[0];

	async function refetch() {
		const res = await fetch('/api/get-all-books');
		const json = await res.json();
		data = json;
		books = data.books;
		latestBook = [...books].sort(
			(a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
		)[0];
	}
</script>

<div class="flex flex-col gap-16 items-center">
	<div class="flex flex-col gap-4">
		<p class="text-neutral-400 flex justify-center">Currently reading</p>
		<MainBook book={latestBook} />
	</div>
	<div class="flex gap-4 flex-col items-center w-full">
		<p class="text-neutral-400">All books</p>
		<AllBooks {books} />
	</div>
	<div class="flex flex-col gap-2 items-center">
		<CreateBook />
		<button
			class="text-neutral-400 hover:text-neutral-50 transition duration-150 w-max"
			on:click={refetch}>Refetch</button
		>
	</div>
</div>
