<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		const canvasCoin = document.getElementById('chartCoin') as HTMLCanvasElement | null;
		const coinCtx = canvasCoin?.getContext('2d');

		coinCtx?.beginPath();
		coinCtx?.moveTo(0, 50);
		coinCtx?.lineTo(100, 20);
		coinCtx?.lineTo(200, 100);
		coinCtx?.lineTo(300, 60);
		coinCtx?.lineTo(400, 30);
		coinCtx?.lineTo(500, 90);
		coinCtx?.lineTo(600, 40);
		coinCtx!.strokeStyle = '#C025E3';
		coinCtx!.lineWidth = 2;
		coinCtx?.stroke();

		coinCtx?.beginPath();
		coinCtx?.moveTo(0, 120);
		coinCtx?.lineTo(100, 80);
		coinCtx?.lineTo(200, 140);
		coinCtx?.lineTo(300, 110);
		coinCtx?.lineTo(400, 50);
		coinCtx?.lineTo(500, 130);
		coinCtx?.lineTo(600, 100);
		coinCtx!.strokeStyle = '#4CB4F0';
		coinCtx!.lineWidth = 2;
		coinCtx?.stroke();
	});
</script>

<canvas id="chartCoin" width="600" height="200"></canvas>
