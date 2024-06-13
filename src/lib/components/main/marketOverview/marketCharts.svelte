<script lang="ts">
	import { marketType, selectMarketType } from '$lib/utils/marketChartsType';
	import MonthlyChart from './Market-Charts/monthlyChart.svelte';
	import DailyCharts from './Market-Charts/dailyChart.svelte';
	import WeeklyCharts from './Market-Charts/weeklyChart.svelte';
</script>

<div class="flex flex-shrink-0 flex-col gap-6 overflow-hidden lg:flex-row lg:gap-2">
	<div class="rounded-lg border border-boxBorder bg-secondary px-4 py-2">
		<div class="flex items-center justify-between pt-2 text-white">
			<h1 class="text-xl font-bold">Market Overview</h1>
			<select
				name="marketOverview"
				id="marketOverview"
				class="cursor-pointer rounded-lg bg-buttonDark px-4 py-2"
				bind:value={$marketType}
				on:change={() => selectMarketType($marketType)}
			>
				<option value="daily">Daily</option>
				<option value="weekly">Weekly</option>
				<option value="monthly" selected>Monthly</option>
			</select>
		</div>
		<div class="flex pt-4">
			<div class="flex flex-col items-end gap-2 text-iconDark">
				<span>50k</span>
				<span>40k</span>
				<span>30k</span>
				<span>20k</span>
				<span>10k</span>
				<span>0k</span>
			</div>
			<div class="pl-2">
				{#if $marketType === 'daily'}
					<DailyCharts />
				{:else if $marketType === 'weekly'}
					<WeeklyCharts />
				{:else if $marketType === 'monthly'}
					<MonthlyChart />
				{/if}
			</div>
		</div>
	</div>
</div>
