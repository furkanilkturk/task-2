<script lang="ts">
	import DropDownButton from './dropdownButton.svelte';
	import DayChart from '$lib/components/main/coinCharts/canvas/dayChart.svelte';
	import WeekChart from '$lib/components/main/coinCharts/canvas/weekChart.svelte';
	import MonthChart from '$lib/components/main/coinCharts/canvas/monthChart.svelte';

	import { selectChartType, chartType } from '$lib/utils/coinChartsType';
</script>

<div class="flex flex-col gap-6 px-2 md:flex-row lg:gap-2">
	<div class="h-64 w-full rounded-lg border bg-light lg:h-72 lg:w-1/2">PlaceHolder</div>
	<div
		class="max-h-max w-full overflow-hidden rounded-lg border border-boxBorder bg-gradient-to-br from-secondary to-darker px-4 py-2 lg:w-1/2"
	>
		<div class="flex items-center justify-between pt-2">
			<DropDownButton />
			<div class="flex gap-2">
				<button
					on:click={() => selectChartType('day')}
					class="flex size-8 items-center justify-center rounded-md bg-buttonDark transition-colors duration-300 hover:bg-darker hover:text-white lg:size-10 {$chartType ===
					'day'
						? 'text-white'
						: 'text-iconDark'}"
				>
					1D
				</button>
				<button
					on:click={() => selectChartType('week')}
					class="flex size-8 items-center justify-center rounded-md bg-buttonDark transition-colors duration-300 hover:bg-darker hover:text-white lg:size-10 {$chartType ===
					'week'
						? 'text-white'
						: 'text-iconDark'}"
				>
					1W
				</button>
				<button
					on:click={() => selectChartType('month')}
					class="flex size-8 items-center justify-center rounded-md bg-buttonDark transition-colors duration-300 hover:bg-darker hover:text-white lg:size-10 {$chartType ===
					'month'
						? 'text-white'
						: 'text-iconDark'}"
				>
					1M
				</button>
			</div>
		</div>
		<div class="flex pt-2">
			<div class="flex flex-col items-end gap-2 text-iconDark">
				<span>50k</span>
				<span>40k</span>
				<span>30k</span>
				<span>20k</span>
				<span>10k</span>
				<span>0k</span>
			</div>
			<div class="pl-2 pt-3">
				{#if $chartType === 'day'}
					<DayChart />
				{:else if $chartType === 'week'}
					<WeekChart />
				{:else}
					<MonthChart />
				{/if}
			</div>
		</div>
	</div>
</div>
