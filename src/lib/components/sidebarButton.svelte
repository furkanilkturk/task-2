<script>
	import { isOpen, sidebarOpen } from '$lib/utils/sidebar';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
</script>

<button on:click={sidebarOpen}>
	{#if $isOpen}
		<div class="rounded-full bg-hover p-2 text-iconDark">
			<ChevronLeft />
		</div>
	{:else}
		<div class="rounded-full bg-hover p-2 text-iconDark">
			<ChevronRight />
		</div>
	{/if}
</button>
