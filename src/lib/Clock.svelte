<script lang="ts">
  import Time from "./Time.svelte";

  let clockWidth: number;
  let current = 240;
  const deg = (x: number) => `${x % 360}deg`;
  const times = Array.from({ length: 12 }, (_, i) => ({
    datetime: `${i === 0 ? 12 : i}:00`,
    degree: deg((current += 30)),
  }));
</script>

<div
  class="h-fit w-fit rounded-full border-stone-800 border-4 shadow-md outline-2 outline outline-stone-600 hover:scale-125"
>
  <div
    bind:clientWidth={clockWidth}
    style="--width: {clockWidth}px; --r: calc((var(--width) - var(--size)) /2); --size: 3cqi;"
    id="clock"
    class="w-96 aspect-square rounded-full bg-stone-50 shadow-inner-lg shadow-stone-500 border-8 border-solid border-stone-900 relative"
  >
    {#each times as { datetime, degree }}
      <div
        class="absolute grid size-[--size] place-content-center left-[--x] top-[--y] [--x:calc(var(--r)+(var(--r)*cos(var(--degree))))] [--y:calc(var(--r)+(var(--r)*sin(var(--degree))))]"
        style="--degree: {degree}"
      >
        <Time {datetime} />
      </div>
    {/each}
  </div>
</div>
