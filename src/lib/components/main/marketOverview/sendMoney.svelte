<script>
	import Avatar from '$lib/assets/avatar.png';
	import { Send } from 'lucide-svelte';
</script>

<div class="rounded-xl bg-secondary px-4 text-white lg:w-60 lg:py-2">
	<h1 class="pt-2 text-left text-lg font-semibold">Quick Transfer</h1>
	<div class="flex w-full justify-between gap-2 pt-6">
		<div
			class="bg-circleButton border-circleBorder flex size-14 cursor-pointer items-center justify-center rounded-full border hover:bg-hover"
		>
			<img src={Avatar} alt="avatar" class="size-8" />
		</div>
		<div
			class="bg-circleButton flex size-14 cursor-pointer items-center justify-center rounded-full hover:bg-hover"
		>
			<img src={Avatar} alt="avatar" class="size-8" />
		</div>
		<div
			class="border-circleBorder flex size-14 cursor-pointer items-center justify-center rounded-full border border-dashed bg-transparent hover:bg-hover"
		>
			+
		</div>
	</div>
	<div class="flex items-center gap-2 pt-8">
		<p class="text-textPurple">Amount:</p>
		<h1 class="text-3xl font-bold">3.25</h1>
	</div>
	<div class="flex items-center justify-center pt-8">
		<button class=" w-full rounded-lg bg-button py-1">
			<div class="flex items-center justify-center gap-2">
				<Send class="size-4" />
				<span class="font-semibold"> Transfer Now </span>
			</div>
		</button>
	</div>
</div>
