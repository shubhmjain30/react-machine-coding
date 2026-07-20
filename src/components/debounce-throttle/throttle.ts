import { logMessage } from "./logMessage";

const throttle = <T extends unknown[]>(
	fn: (...args: T) => void,
	delay: number,
) => {
	let lastCall = 0;
	return (...args: T) => {
		const now = Date.now();
		if (now - lastCall < delay) return;
		lastCall = now;
		fn(...args);
	};
};

const throttleLogger = throttle(logMessage, 300);

throttleLogger("H");
throttleLogger("He");
throttleLogger("Hel");
throttleLogger("Hell");
setTimeout(() => {
	throttleLogger("Hello");
}, 500);
