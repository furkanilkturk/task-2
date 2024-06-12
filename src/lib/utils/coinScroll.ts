import { get, writable } from 'svelte/store';
import { items } from '$lib/data/coinData';

export const visibleItems = writable(items.slice(0, 5));
export const itemsLenght = items.length;
export const startIndex = writable(0);
export let isLeftButtonActive = writable(false);
export let isRightButtonActive = writable(true);

export const scrollRight = () => {
	startIndex.update((n) => {
		if (n + 5 < items.length) {
			n++;
			visibleItems.set(items.slice(n, n + 5));
		}
		updateButtonStates(n);
		return n;
	});
};

export const scrollLeft = () => {
	startIndex.update((n) => {
		if (n > 0) {
			n--;
			visibleItems.set(items.slice(n, n + 5));
		}
		updateButtonStates(n);
		return n;
	});
};

// left and right button visibility
const updateButtonStates = (n: number) => {
	isLeftButtonActive.set(n != 0);
	isRightButtonActive.set(n + get(visibleItems).length < itemsLenght);
};
updateButtonStates(get(startIndex));
