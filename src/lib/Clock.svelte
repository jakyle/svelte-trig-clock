<script lang="ts">
  import Circle from "./Circle.svelte";
  import CircleItem from "./CircleItem.svelte";
  import Time from "./Time.svelte";

  const TAU = Math.PI * 2;

  let clockWidth: number;
  const radianTurn = TAU / 12;
  let currentRadians = 3 * (TAU / 4);
  const rad = (x: number) => `${x % TAU}rad`;

  const times = Array.from({ length: 12 }, (_, i) => ({
    datetime: `${i+1}:00`,
    angle: rad((currentRadians += radianTurn)),
  }));

  const time = new Date();
  const hour = -3600 * (time.getHours() % 12);
  const mins = -60 * time.getMinutes();
  const size = '2rem';
</script>

<div
  class="h-fit w-fit rounded-full border-stone-800 border-4 shadow-md outline-2 outline outline-stone-600"
>
  <Circle width={clockWidth}>
    <div
      bind:clientWidth={clockWidth}
      id="clock"
      class="w-96 aspect-square rounded-full bg-stone-50 shadow-inner-lg shadow-stone-500 border-8 border-solid border-stone-900 flex justify-center items-center isolate z-0"
    >
      {#each times as { datetime, angle }}
        <CircleItem {angle} {size}>
          <Time {datetime} />
        </CircleItem>
      {/each}
      <div class="size-3.5 rounded-full border-2 border-solid border-stone-900 bg-stone-100 z-40" />

      <div style="--arm-width: 2px; --arm-height: 150px;" class="bg-red-600 rounded origin-bottom absolute h-arm w-arm left-arm top-arm animate-seconds animation-delay-secs" />
      <div style="--arm-width: 6px; --arm-height: 145px; --delay-minutes: {mins}s" class="bg-stone-700 rounded origin-bottom absolute h-arm w-arm left-arm top-arm animate-minutes animation-delay-mins z-20" />
      <div style="--arm-width: 6px; --arm-height: 110px; --delay-hours: {hour+mins}s" class="bg-stone-900 rounded origin-bottom absolute h-arm w-arm left-arm top-arm animate-hours animation-delay-hours z-30" />

      <div class="absolute top-1/10 left-1/10 w-4/5 h-4/5 bg-clock-glare rounded-full z-50" />
    </div>
  </Circle>
</div>
