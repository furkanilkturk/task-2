<script>
	import { ArrowRightLeft, ArrowUp, ArrowDown } from 'lucide-svelte';
	export let baseCurrency;
	export let quoteCurrency;
	export let change;
	export let price;
	export let icon;
</script>

<div class="relative pt-3">
	<div
		class="h-36 w-80 overflow-hidden rounded-xl border border-boxBorder bg-secondary px-3 pt-4 lg:w-64"
	>
		<img class="absolute bottom-32 left-[7rem] size-10" src={icon} alt="Icon of Coin" />
		<div class="flex justify-between">
			<div class="flex flex-col">
				<div class="flex items-center gap-4 text-iconDark">
					<span>{baseCurrency}</span>
					<ArrowRightLeft class="size-4 text-white" />
					<span>{quoteCurrency}</span>
				</div>
				<h1 class="text-xl font-semibold text-white">{price}</h1>
			</div>
			<div
				class="flex items-center gap-1 pb-8 text-changeGreen {change < 0
					? 'text-changeRed'
					: 'text-changeGreen'}"
			>
				<div
					class=" flex size-5 items-center justify-center rounded-full border p-0.5 {change < 0
						? 'border-changeRed'
						: 'border-changeGreen'}"
				>
					{#if change > 0}
						<ArrowUp />
					{:else if change < 0}
						<ArrowDown />
					{/if}
				</div>
				<span>{change} %</span>
			</div>
		</div>
	</div>
</div>
