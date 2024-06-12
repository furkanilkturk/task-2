import { writable } from 'svelte/store';

export const isOpen = writable(true);
export const chartType = writable('day');

export const sidebarOpen = () => {
	isOpen.update((current) => {
		const newState = !current;
		console.log('Sidebar State:', isOpen);
		return newState;
	});
};

export const selectChartType = (type: string) => {
	chartType.update((current) => type);
};
