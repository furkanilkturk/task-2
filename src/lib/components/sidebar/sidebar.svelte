<script>
	import { LogOut } from 'lucide-svelte';

	import { isOpen } from '$lib/utils/store';
	import Routes from './routes.svelte';
	import SidebarButton from '../sidebarButton.svelte';
</script>

<aside
	class="fixed z-20 h-full w-full flex-col items-center justify-between gap-4 bg-darker transition-all duration-300 lg:static lg:flex lg:w-32 lg:border-r-[2px] lg:border-border lg:bg-transparent lg:px-2 lg:pt-4 {$isOpen
		? 'w-32'
		: 'translate-x-[-1000px] lg:absolute '}"
>
	<div class="relative lg:hidden">
		<div class="absolute right-1 top-1">
			<SidebarButton />
		</div>
		<div class=" flex flex-col justify-between gap-12 pt-16">
			<Routes />
		</div>
	</div>
	<div class="hidden w-full flex-col items-center gap-6 lg:flex">
		<div class="logo mb-14 text-white">LOGO</div>
		<Routes />
	</div>
	<div class="sidebarButton' mb-2 hidden cursor-pointer text-iconDark lg:flex">
		<LogOut />
	</div>
</aside>
