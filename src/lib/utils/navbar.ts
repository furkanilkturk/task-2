import { writable } from 'svelte/store';

export const isFocus = writable(false);

export const handleFocus = () => {
	isFocus.set(true);
	console.log(isFocus);
};

export const handleBlur = () => {
	isFocus.set(false);
};
