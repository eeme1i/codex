<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	export let args: SvelteComponent;
</script>

<input
	{...args}
	class="min-w-0 rounded-full border border-neutral-700 bg-neutral-800 px-4 py-2 transition-colors placeholder:text-neutral-400 focus:bg-neutral-700 max-w-[256px]"
/>
