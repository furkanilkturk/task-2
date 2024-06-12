<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const canvasOverview = document.getElementById('chartOverview') as HTMLCanvasElement | null;
		const overviewCtx = canvasOverview?.getContext('2d');

		overviewCtx?.beginPath();
		overviewCtx?.moveTo(0, 0);
		overviewCtx?.lineTo(150, 0);
		overviewCtx?.lineTo(200, 175);
		overviewCtx?.lineTo(250, 50);
		overviewCtx?.lineTo(300, 20);
		overviewCtx?.lineTo(425, 140);
		overviewCtx?.lineTo(500, 140);
		overviewCtx?.lineTo(600, 30);

		overviewCtx!.strokeStyle = '#C025E3';
		overviewCtx!.lineWidth = 2;
		overviewCtx?.stroke();

		overviewCtx?.beginPath();
		overviewCtx?.moveTo(0, 175);
		overviewCtx?.lineTo(75, 90);
		overviewCtx?.lineTo(150, 175);
		overviewCtx?.lineTo(175, 150);
		overviewCtx?.lineTo(275, 80);
		overviewCtx?.lineTo(325, 175);
		overviewCtx?.lineTo(400, 90);
		overviewCtx?.lineTo(600, 30);

		overviewCtx!.strokeStyle = '#4CB4F0';
		overviewCtx!.lineWidth = 2;
		overviewCtx?.stroke();

		overviewCtx?.beginPath();
		overviewCtx?.moveTo(0, 175);
		overviewCtx?.lineTo(120, 110);
		overviewCtx?.lineTo(180, 155);
		overviewCtx?.lineTo(290, 145);
		overviewCtx?.lineTo(360, 78);
		overviewCtx?.lineTo(460, 175);
		overviewCtx?.lineTo(520, 40);
		overviewCtx?.lineTo(600, 20);

		overviewCtx!.strokeStyle = '#8519F5';
		overviewCtx!.lineWidth = 2;
		overviewCtx?.stroke();
	});
</script>

<canvas id="chartOverview" width="600" height="200"></canvas>
