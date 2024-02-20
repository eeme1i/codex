<script lang="ts">
	import MainBook from '../../../components/main-book.svelte';

	export let data;
	console.log(data);
	let book = data.book[0];
</script>

<div class="flex flex-col gap-4">
	<p class="text-neutral-400 flex justify-center">{book.title}</p>
	<MainBook {book} />
	<a href="/" class="text-neutral-400 flex justify-center hover:text-neutral-200">Back</a>
</div>
