<script lang="ts">
	export let title: string;
	export let height: number;
	let width = height / 1.33;
	// export let bgColor: string;
</script>

<div
	class={`from-neutral-950/40 to-neutral-950/90 bg-gradient-to-br bg-neutral-900 border border-neutral-700  rounded p-2 hover:border-neutral-500 transition duration-150`}
	style=" height: {height}px; width: {width}px;"
>
	<p
		class="word-wrap text-2xl overflow-hidden text-neutral-50/10 tracking-tighter font-bold text-left"
	>
		{title}
	</p>
</div>
