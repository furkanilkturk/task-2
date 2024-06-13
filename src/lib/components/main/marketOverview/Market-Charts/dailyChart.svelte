<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		const canvasOverview = document.getElementById(
			'chartOverviewDaily'
		) as HTMLCanvasElement | null;
		const overviewCtx = canvasOverview?.getContext('2d');

		overviewCtx?.beginPath();
		overviewCtx?.moveTo(0, 0);
		overviewCtx?.lineTo(100, 0);
		overviewCtx?.lineTo(150, 110);
		overviewCtx?.lineTo(300, 110);
		overviewCtx?.lineTo(350, 165);
		overviewCtx?.lineTo(450, 0);
		overviewCtx?.lineTo(600, 0);
		overviewCtx!.strokeStyle = '#C025E3';
		overviewCtx!.lineWidth = 2;
		overviewCtx?.stroke();

		overviewCtx?.beginPath();
		overviewCtx?.moveTo(0, 165);
		overviewCtx?.lineTo(75, 165);
		overviewCtx?.lineTo(200, 0);
		overviewCtx?.lineTo(275, 70);
		overviewCtx?.lineTo(350, 70);
		overviewCtx?.lineTo(450, 165);
		overviewCtx?.lineTo(600, 165);
		overviewCtx!.strokeStyle = '#4CB4F0';
		overviewCtx!.lineWidth = 2;
		overviewCtx?.stroke();
	});
</script>

<canvas id="chartOverviewDaily" width="600" height="200"></canvas>
