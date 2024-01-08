<script lang='ts'>
	export let size: string;
	export let angle: string;
</script>

<div class="absolute grid size-var place-content-center left-x top-y" style="--size: {size}; --angle: {angle}">
	<slot />
</div>