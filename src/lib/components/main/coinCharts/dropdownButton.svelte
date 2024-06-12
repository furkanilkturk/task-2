<script lang="ts">
	import Ethereum from '$lib/assets/ethereum.png';
	import Bitcoin from '$lib/assets/bitcoin.png';
	import Litecoin from '$lib/assets/litecoin.png';
	let icon = Ethereum;
	const onChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		if (target.value === 'eth/usd') {
			icon = Ethereum;
		} else if (target.value === 'btc/usd') {
			icon = Bitcoin;
		} else if (target.value === 'ltc/usd') {
			icon = Litecoin;
		}
	};
</script>

<div
	class="flex items-center justify-center gap-2 rounded-md bg-buttonDark p-1.5 text-white lg:px-4 lg:py-2"
>
	<img src={icon} alt="Coin Icon" class="size-4 rounded lg:size-5" />
	<select value="eth/usd" class="cursor-pointer bg-buttonDark" on:change={onChange}>
		<option value="eth/usd">ETH/USD</option>
		<option value="btc/usd">BTC/USD</option>
		<option value="ltc/usd">LTC/USD</option>
	</select>
</div>
