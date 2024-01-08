<script lang="ts">
	export let width: number;
</script>

<div class="contents *:relative" style="--width: {width}px;">
	<slot />
</div>