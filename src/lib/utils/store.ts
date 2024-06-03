import { writable } from 'svelte/store';

export const isOpen = writable(true);

export const sidebarOpen = () => {
	isOpen.update((current) => {
		const newState = !current;
		console.log('Sidebar State:', isOpen);
		return newState;
	});
};
