const MAX_ENTRIES = 500;
const METHODS = ["log", "info", "warn", "error"];

let entries = [];
let nextId = 0;
const listeners = new Set();
let patched = false;

const notify = () => {
	for (const listener of listeners) listener();
};

const pushEntry = (type, args) => {
	nextId += 1;
	entries = [...entries, { id: nextId, type, args }].slice(-MAX_ENTRIES);
	notify();
};

export const formatArg = (arg) => {
	if (arg instanceof Error) return arg.stack || arg.message;
	if (typeof arg === "string") return arg;
	try {
		return JSON.stringify(arg, null, 2);
	} catch {
		return String(arg);
	}
};

export const patchConsole = () => {
	if (patched) return;
	patched = true;

	for (const method of METHODS) {
		const original = console[method].bind(console);
		console[method] = (...args) => {
			original(...args);
			pushEntry(method, args);
		};
	}

	window.addEventListener("error", (event) => {
		pushEntry("error", [event.error?.stack || event.message]);
	});

	window.addEventListener("unhandledrejection", (event) => {
		pushEntry("error", [
			`Unhandled promise rejection: ${event.reason?.stack || event.reason}`,
		]);
	});
};

export const getEntries = () => entries;

export const subscribe = (listener) => {
	listeners.add(listener);
	return () => listeners.delete(listener);
};

export const clearEntries = () => {
	entries = [];
	notify();
};
