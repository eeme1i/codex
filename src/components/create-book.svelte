<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import InputField from './input-field.svelte';
	let createPanelVisible = false;
	function toggleCreatePanel() {
		createPanelVisible = !createPanelVisible;
	}

	let bookTitle = '';
	let bookAuthor = '';
	let bookPageCount = 0;
	let bookCurrentPage = 0;

	let error: string = '';

	function validateBook() {
		if (bookPageCount != Number(bookPageCount) || bookCurrentPage != Number(bookCurrentPage)) {
			error = 'Page count must be a number';
			return false;
		}

		if (bookTitle === '') {
			error = 'Title is required';
			return false;
		}
		if (bookAuthor === '') {
			error = 'Author is required';
			return false;
		}
		if (bookPageCount === 0) {
			error = 'Page count is required';
			return false;
		}
		if (bookCurrentPage > bookPageCount) {
			error = 'Current page cannot be greater than page count';
			return false;
		}
		return true;
	}

	async function createBook() {
		if (!validateBook()) {
			return;
		}

		error = '';
		const res = await fetch('/api/create-book', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: bookTitle,
				author: bookAuthor,
				pageCount: bookPageCount,
				currentPage: bookCurrentPage,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString()
			})
		});
		toggleCreatePanel();
	}
</script>

<button on:click={toggleCreatePanel} class="px-4 py-2 text-black bg-yellow-400 w-max rounded-xl"
	>Create book</button
>
{#if createPanelVisible}
	<div
		transition:fade={{ duration: 150 }}
		class="absolute top-0 left-0 w-screen h-screen bg-neutral-950/50"
	>
		<button on:click={toggleCreatePanel} class="absolute top-0 left-0 w-screen h-screen"></button>
		<div
			transition:fly={{ y: 10, duration: 150 }}
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-900 py-4 px-8 flex flex-col gap-4 rounded-xl border border-neutral-800 max-w-96 items-center"
		>
			<h1>Create a new book</h1>

			<p class="text-sm text-neutral-400">Title</p>
			<input
				type="text"
				class="min-w-0 rounded-full border border-neutral-700 bg-neutral-800 px-4 py-2 transition-colors placeholder:text-neutral-400 focus:bg-neutral-700 max-w-[256px]"
				placeholder="Title"
				bind:value={bookTitle}
			/>

			<p class="text-sm text-neutral-400">Author</p>
			<input
				type="text"
				class="min-w-0 rounded-full border border-neutral-700 bg-neutral-800 px-4 py-2 transition-colors placeholder:text-neutral-400 focus:bg-neutral-700 max-w-[256px]"
				placeholder="Author"
				bind:value={bookAuthor}
			/>

			<p class="text-sm text-neutral-400">Total pages</p>
			<input
				type="number"
				class="min-w-0 rounded-full border border-neutral-700 bg-neutral-800 px-4 py-2 transition-colors placeholder:text-neutral-400 focus:bg-neutral-700 max-w-[256px]"
				placeholder="Page count"
				bind:value={bookPageCount}
			/>

			<p class="text-sm text-neutral-400">Current page</p>
			<input
				type="number"
				class="min-w-0 rounded-full border border-neutral-700 bg-neutral-800 px-4 py-2 transition-colors placeholder:text-neutral-400 focus:bg-neutral-700 max-w-[256px]"
				placeholder="Current page"
				bind:value={bookCurrentPage}
			/>

			<p class="text-red-400">{error}</p>

			<button
				class="bg-neutral-800 border border-neutral-700 text-yellow-400 rounded-full px-4 py-2"
				on:click={createBook}>Save</button
			>
		</div>
	</div>
{/if}
