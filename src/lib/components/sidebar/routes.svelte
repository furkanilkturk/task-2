<script>
	import { Home, PieChart, ShoppingBag, Settings, LogOut } from 'lucide-svelte';
	import { page } from '$app/stores';
</script>

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
	class="sidebarButton {$page.url.pathname === '/market' ? 'bg-hover text-icon' : 'text-iconDark'}"
>
	<ShoppingBag />
</a>
<a
	href="/settings"
	class="sidebarButton {$page.url.pathname === '/settings'
		? 'bg-hover text-icon'
		: 'text-iconDark'}"
>
	<Settings />
</a>
<a
	href="/logout"
	class="sidebarButton flex lg:hidden {$page.url.pathname === '/logout'
		? 'bg-hover text-icon'
		: 'text-iconDark'}"
>
	<LogOut />
</a>
