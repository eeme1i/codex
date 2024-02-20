<script lang="ts">
	import type { Book } from '$lib/types';
	import { fly, fade } from 'svelte/transition';
	import PlusIcon from './icons/plus-icon.svelte';
	import MinusIcon from './icons/minus-icon.svelte';
	import BookIcon from './book-icon.svelte';
	import { redirect } from '@sveltejs/kit';

	export let book: Book;

	$: progress = (book.currentPage / book.pageCount) * 100;

	let editPanelVisible = false;
	function toggleEditPanel() {
		editPanelVisible = !editPanelVisible;
	}

	function validateCurrentPage() {
		if (book.currentPage < 0) {
			book.currentPage = 0;
		}
		if (book.currentPage > book.pageCount) {
			book.currentPage = book.pageCount;
		}
	}
	function increaseCurrentPage() {
		validateCurrentPage();
		book.currentPage += 1;
	}

	function decreaseCurrentPage() {
		validateCurrentPage();
		book.currentPage -= 1;
	}

	async function updatePageCount() {
		const res = await fetch(`/api/update-page-count`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id: book.id, currentPage: book.currentPage })
		});
		toggleEditPanel();
	}

	async function deleteBook() {
		const res = await fetch(`/api/delete-book`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id: book.id })
		});
		redirect(307, '/');
	}
</script>

<div class="flex justify-center">
	<button
		on:click={toggleEditPanel}
		class="border flex flex-col gap-4 rounded-xl border-neutral-700 bg-neutral-900 p-4 items-center hover:bg-neutral-800 hover:scale-105 transition duration-300 w-max"
	>
		<BookIcon title={book.title} height={256} />
		<div class="w-full h-1 bg-neutral-500 relative">
			<div class={`absolute top-0 left-0 h-full bg-yellow-500`} style={`width: ${progress}%`}></div>
		</div>
		<p class="text-neutral-400">
			{book.currentPage}/{book.pageCount}
		</p>
		<div class="flex flex-col items-center">
			<h2 class="text-xl">{book.title}</h2>
			<p class="text-neutral-400">{book.author}</p>
		</div>
	</button>
</div>

{#if editPanelVisible}
	<div
		transition:fade={{ duration: 150 }}
		class="absolute top-0 left-0 w-screen h-screen bg-neutral-950/50"
	>
		<button on:click={toggleEditPanel} class="absolute top-0 left-0 w-screen h-screen"></button>
		<div
			transition:fly={{ y: 10, duration: 150 }}
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-900 py-4 px-8 flex flex-col gap-4 rounded-xl border border-neutral-800 max-w-96 items-center"
		>
			<p>Current page: {book.currentPage}</p>
			<div class="flex gap-4">
				<button on:click={decreaseCurrentPage}>
					<MinusIcon />
				</button>
				<input
					type="number"
					class="bg-neutral-800 text-center w-16 rounded py-1 px-2"
					bind:value={book.currentPage}
				/>
				<button on:click={increaseCurrentPage}>
					<PlusIcon />
				</button>
			</div>
			<button
				class="bg-neutral-800 border border-neutral-700 text-yellow-400 rounded-full px-4 py-2"
				on:click={updatePageCount}>Save</button
			>
			<button on:click={deleteBook} class="text-red-500 w-max">Delete</button>
		</div>
	</div>
{/if}
