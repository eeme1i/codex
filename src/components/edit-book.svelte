<script lang="ts">
	import type { Book } from '$lib/types';
	export let currentBook: Book;
	let visibility = false;
	let toggleVisibility = () => {
		visibility = !visibility;
	};

	function increase() {
		currentBook.currentPage++;
		console.log(currentBook.currentPage);
	}

	function decrease() {
		currentBook.currentPage--;
	}

	function save() {
		toggleVisibility();
	}

	function onKeyDown(event: KeyboardEvent) {
		console.log('penis');
		switch (event.key) {
			case 'Escape':
				toggleVisibility();
				break;
			case 'ArrowUp':
				increase();
				break;
			case 'ArrowDown':
				decrease();
				break;
			case 'Enter':
				save();
				break;
		}
	}
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />
<button on:click={toggleVisibility}>Edit</button>
{#if visibility}
	<div class="absolute top-0 left-0 w-screen h-screen">
		<div
			class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-900"
		>
			<p>Current page: {currentBook.currentPage}</p>
			<div class="flex gap-4">
				<button on:click={decrease}>-</button>
				<input type="number" class="bg-neutral-800" bind:value={currentBook.currentPage} />
				<button on:click={increase}>+</button>
			</div>
			<button class="bg-green-400" on:click={save}>Save</button>
		</div>
	</div>
{/if}
