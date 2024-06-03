<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Sidebar from '$lib/components/sidebar.svelte';
</script>

<div class="flex h-screen w-screen gap-4 bg-primary">
	<Sidebar />
	<div class="flex w-full flex-col">
		<Navbar />
	</div>
</div>
