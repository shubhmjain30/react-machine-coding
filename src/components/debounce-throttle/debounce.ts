import { logMessage } from "./logMessage";

const debounce = <T extends unknown[]>(
	fn: (...args: T) => void,
	delay: number,
) => {
	let timerId: ReturnType<typeof setTimeout>;
	return (...args: T) => {
		clearTimeout(timerId);
		timerId = setTimeout(() => fn(...args), delay);
	};
};

const debouncedLogger = debounce(logMessage, 300);

debouncedLogger("H");
debouncedLogger("He");
debouncedLogger("Hel");
debouncedLogger("Hell");
setTimeout(() => {
	debouncedLogger("Hello");
}, 500);
