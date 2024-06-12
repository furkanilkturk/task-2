<script lang="ts">
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import Sidebar from '$lib/components/sidebar/sidebar.svelte';
	import CoinChart from '$lib/components/main/coinCharts/coinChart.svelte';
	import ScrollBoxes from '$lib/components/main/coinOverview/scrollBoxes.svelte';
	import MarketOverview from '$lib/components/main/marketOverview/marketOverview.svelte';
</script>

<div class="flex h-screen w-screen overflow-x-hidden bg-primary">
	<Sidebar />
	<div class="flex w-full flex-col px-4">
		<Navbar />
		<main class="flex h-full w-full flex-col p-4 lg:px-0 lg:pt-2">
			<CoinChart />
			<ScrollBoxes />
			<MarketOverview />
		</main>
	</div>
</div>
