import { writable } from 'svelte/store';

export const marketType = writable('monthly');

export const selectMarketType = (type: string) => {
	marketType.update(() => type);
};
