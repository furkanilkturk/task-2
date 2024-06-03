<script>
	import { Home, PieChart, ShoppingBag, Settings, LogOut } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { isOpen } from '$lib/utils/store';
</script>

<aside
	class="hidden flex-col items-center justify-between gap-4 border-r-[2px] border-border px-2 pt-4 transition-all duration-300 lg:flex {$isOpen
		? 'w-32'
		: 'translate-x-[-1000px] '}"
>
	<div class="flex w-full flex-col items-center gap-6">
		<div class="logo mb-14 text-white">LOGO</div>
		<a
			href="/"
			class="sidebarButton {$page.url.pathname === '/' ? 'bg-hover text-icon' : 'text-iconDark'}"
		>
			<Home />
		</a>
		<a
			href="/analytics"
			class="sidebarButton {$page.url.pathname === '/analytics'
				? 'bg-hover text-icon'
				: 'text-iconDark'}"
		>
			<PieChart />
		</a>
		<a
			href="/market"
			class="sidebarButton {$page.url.pathname === '/market'
				? 'bg-hover text-icon'
				: 'text-iconDark'}"
		>
			<ShoppingBag />
		</a>
		<a
			href="/settings"
			class=" sidebarButton {$page.url.pathname === '/settings'
				? 'bg-hover text-icon'
				: 'text-iconDark'}"
		>
			<Settings />
		</a>
	</div>
	<div class="sidebarButton' mb-2 cursor-pointer text-iconDark">
		<LogOut />
	</div>
</aside>
