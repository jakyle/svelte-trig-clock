<script lang="ts">
	export let datetime: string;
	$: display = datetime.split(':').at(0)
</script>

<time class="font-bold text-xl hover:scale-125 transition-transform" {datetime}>{display}</time>