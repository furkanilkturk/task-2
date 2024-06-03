<script lang="ts">
	import { ChevronLeft, ChevronRight, Search, Bell } from 'lucide-svelte';
	import Avatar from '$lib/assets/avatar.png';
	import { isOpen, sidebarOpen } from '$lib/utils/store';

	let isFocus = false;
	let inputValue = '';
	const handleFocus = () => {
		isFocus = true;
	};
	const handleBlur = () => {
		isFocus = false;
	};
</script>

<nav class="flex w-full items-center justify-between px-2 py-4">
	<button on:click={sidebarOpen}>
		{#if $isOpen}
			<div
				class="absolute top-4 rounded-full bg-hover p-2 text-iconDark transition-all duration-300"
			>
				<ChevronLeft />
			</div>
		{:else}
			<div
				class="absolute left-2 top-4 rounded-full bg-hover p-2 text-iconDark transition-all duration-300"
			>
				<ChevronRight />
			</div>
		{/if}
	</button>
	<h1 class="text-white">Home</h1>
	<div class="flex gap-4">
		<div class="relative">
			<input
				type="text"
				id="search"
				name="search"
				class="rounded-lg bg-input px-1 py-1.5 text-white"
				on:focus={handleFocus}
				on:blur={handleBlur}
				bind:value={inputValue}
			/>

			<label
				for="search"
				class="absolute left-2 top-[0.3rem] text-iconDark {isFocus || inputValue
					? 'hidden'
					: 'flex'}"
			>
				Search
			</label>
			<button class="absolute right-2 top-[0.3rem] text-iconDark"><Search class="w-4" /></button>
		</div>
		<div class="flex gap-2">
			<div class="rounded-full bg-hover p-2 text-iconDark"><Bell /></div>
			<div class="w-10 rounded-full bg-iconDark p-2 text-iconDark">
				<img src={Avatar} alt="Avatar" />
			</div>
		</div>
	</div>
</nav>
