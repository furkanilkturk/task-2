<script lang="ts">
	import { ChevronRight, ChevronLeft } from 'lucide-svelte';
	import {
		visibleItems,
		scrollRight,
		scrollLeft,
		isRightButtonActive,
		isLeftButtonActive
	} from '$lib/utils/coinScroll';
	import CoinBox from './coinBox.svelte';
</script>

<div>
	<div class="relative flex w-full flex-row items-center justify-between overflow-hidden px-2 pt-8">
		<button
			on:click={scrollRight}
			class="top-18 absolute right-1 z-10 rounded-full border border-border bg-buttonScroll p-2 text-white"
			class:hidden={!$isRightButtonActive}><ChevronRight /></button
		>
		<button
			on:click={scrollLeft}
			class="top-18 absolute -left-2 z-10 rounded-full border border-border bg-buttonScroll p-2 text-white"
			class:hidden={!$isLeftButtonActive}><ChevronLeft /></button
		>

		{#each $visibleItems as item}
			<CoinBox {...item} />
		{/each}
	</div>
</div>
