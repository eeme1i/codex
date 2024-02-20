<script lang="ts">
	export let size: number = 24;
	export let color: string = "#ffffff";
</script>

<div>
	<svg width={size} height={size} stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color={color}>
		<path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">

		</path>
	</svg>
</div>