<script>
	import MarketCharts from './marketCharts.svelte';
	import SendMoney from './sendMoney.svelte';
	import { marketData } from '$lib/data/marketData';
</script>

<div class="flex flex-col gap-4 px-2 pt-4 lg:flex-row">
	<MarketCharts />
	<SendMoney />
	<div class="flex w-full flex-col rounded-xl bg-secondary px-4 py-2 text-white">
		<h1 class="pb-4 text-lg font-semibold">Market Trend</h1>
		<table>
			<thead>
				<tr class="text-sm text-iconDark">
					<th class="text-left">Name</th>
					<th class="text-center">Last Price</th>
					<th class="text-right">24h Change</th>
				</tr>
			</thead>
			<tbody>
				{#each marketData as coin}
					<tr>
						<td class="flex gap-2"
							><p>
								{coin.symbol}
							</p>
							<p class="text-iconDark">
								{coin.name}
							</p>
						</td>
						<td class="text-center">${coin.lastPrice.toLocaleString()}</td>
						<td class="text-right {coin.up ? 'up' : 'down'}">
							{coin.change.toLocaleString()}
							{#if coin.up}
								<span class="text-green-700">▲</span>
							{:else}
								<span class="text-red-700">▼</span>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
