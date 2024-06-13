<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		const canvasOverview = document.getElementById(
			'chartOverviewWeekly'
		) as HTMLCanvasElement | null;
		const overviewCtx = canvasOverview?.getContext('2d');

		overviewCtx?.beginPath();
		overviewCtx?.moveTo(0, 0);
		overviewCtx?.lineTo(100, 0);
		overviewCtx?.lineTo(90, 110);
		overviewCtx?.lineTo(160, 150);
		overviewCtx?.lineTo(250, 145);
		overviewCtx?.lineTo(450, 0);
		overviewCtx?.lineTo(600, 0);
		overviewCtx!.strokeStyle = '#C025E3';
		overviewCtx!.lineWidth = 2;
		overviewCtx?.stroke();

		overviewCtx?.beginPath();
		overviewCtx?.moveTo(0, 150);
		overviewCtx?.lineTo(75, 120);
		overviewCtx?.lineTo(200, 0);
		overviewCtx?.lineTo(275, 70);
		overviewCtx?.lineTo(350, 70);
		overviewCtx?.lineTo(475, 125);
		overviewCtx?.lineTo(600, 165);
		overviewCtx!.strokeStyle = '#4CB4F0';
		overviewCtx!.lineWidth = 2;
		overviewCtx?.stroke();
	});
</script>

<canvas id="chartOverviewWeekly" width="600" height="200"></canvas>
