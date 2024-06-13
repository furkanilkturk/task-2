import { writable } from 'svelte/store';

export const chartType = writable('day');

export const selectChartType = (type: string) => {
	chartType.update((current) => type);
};
