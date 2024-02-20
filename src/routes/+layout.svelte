<script lang="ts">
	import '../app.css';
	import Nav from '../components/nav.svelte';
</script>

<div class="min-h-screen bg-neutral-950 text-neutral-50 tracking-tight relative overflow-x-hidden">
	<div class="p-4 flex flex-col gap-4">
		<Nav />
		<div>
			<slot />
		</div>
	</div>
</div>
