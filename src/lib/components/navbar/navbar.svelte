<script lang="ts">
	import { Search, Bell } from 'lucide-svelte';
	import Avatar from '$lib/assets/avatar.png';

	import SidebarButton from '../sidebarButton.svelte';

	let isFocus = false;
	let inputValue = '';
	const handleFocus = () => {
		isFocus = true;
	};
	const handleBlur = () => {
		isFocus = false;
	};
</script>

<nav class="flex w-full items-center justify-between px-4 py-4">
	<SidebarButton />
	<h1 class="hidden text-white lg:flex">Home</h1>

	<!-- Mobile Nav -->
	<div class="relative lg:hidden">
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
			class="absolute left-2 top-[0.3rem] text-iconDark {isFocus || inputValue ? 'hidden' : 'flex'}"
		>
			Search
		</label>
		<button class="absolute right-2 top-[0.3rem] text-iconDark"><Search class="w-4" /></button>
	</div>
	<div class="flex gap-2 lg:hidden">
		<div class="rounded-full bg-hover p-2 text-iconDark"><Bell /></div>
		<div class="w-10 rounded-full bg-iconDark p-2 text-iconDark">
			<img src={Avatar} alt="Avatar" />
		</div>
	</div>

	<div class="hidden gap-4 lg:flex">
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
