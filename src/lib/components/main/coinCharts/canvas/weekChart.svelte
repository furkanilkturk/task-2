<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		const canvasCoin = document.getElementById('chartCoin') as HTMLCanvasElement | null;
		const coinCtx = canvasCoin?.getContext('2d');

		coinCtx?.beginPath();
		coinCtx?.moveTo(0, 0);
		coinCtx?.lineTo(100, 0);
		coinCtx?.lineTo(90, 110);
		coinCtx?.lineTo(160, 150);
		coinCtx?.lineTo(250, 145);
		coinCtx?.lineTo(450, 0);
		coinCtx?.lineTo(600, 0);
		coinCtx!.strokeStyle = '#C025E3';
		coinCtx!.lineWidth = 2;
		coinCtx?.stroke();

		coinCtx?.beginPath();
		coinCtx?.moveTo(0, 150);
		coinCtx?.lineTo(75, 120);
		coinCtx?.lineTo(200, 0);
		coinCtx?.lineTo(275, 70);
		coinCtx?.lineTo(350, 70);
		coinCtx?.lineTo(475, 125);
		coinCtx?.lineTo(600, 165);
		coinCtx!.strokeStyle = '#4CB4F0';
		coinCtx!.lineWidth = 2;
		coinCtx?.stroke();
	});
</script>

<canvas id="chartCoin" width="600" height="200"></canvas>
