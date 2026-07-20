const delay = (ms: number, task: string): Promise<string> => {
	return new Promise<string>((resolve) => {
		setTimeout(() => {
			resolve(task);
		}, ms);
	});
};

const WORKER = 2;

type Task = () => Promise<string>;

const tasks: Task[] = [
	() => delay(3000, "A"),
	() => delay(1000, "B"),
	() => delay(2000, "C"),
	() => delay(500, "D"),
];

const asyncPool = async (worker: number, tasks: Task[]): Promise<string[]> => {
	let index: number = 0;
	let results: string[] = [];

	const runWorker = async () => {
		while (index < tasks.length) {
			const currentIndex = index++;
			console.log("[runWorker] currentIndex", currentIndex);
			results[currentIndex] = await tasks[currentIndex]();
		}
	};

	const workers = Array.from({ length: worker }, () => runWorker());

	await Promise.all(workers);
	console.log("[asyncPool] results", results);
	return results;
};

asyncPool(WORKER, tasks);
