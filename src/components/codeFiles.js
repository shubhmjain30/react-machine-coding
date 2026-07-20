const rawModules = import.meta.glob("./*/*.{js,jsx,ts,tsx,css}", {
	eager: true,
	query: "?raw",
	import: "default",
});

const LANGUAGE_BY_EXT = {
	js: "jsx",
	jsx: "jsx",
	ts: "tsx",
	tsx: "tsx",
	css: "css",
};

const toPascalCase = (dir) =>
	dir
		.split("-")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");

const filesByDir = {};

for (const [path, code] of Object.entries(rawModules)) {
	// path looks like "./grid-lights/GridLights.tsx"
	const [, dir, name] = path.match(/^\.\/([^/]+)\/([^/]+)$/);
	const ext = name.split(".").pop();

	if (!filesByDir[dir]) filesByDir[dir] = [];
	filesByDir[dir].push({
		name,
		code,
		language: LANGUAGE_BY_EXT[ext] ?? "jsx",
	});
}

for (const [dir, files] of Object.entries(filesByDir)) {
	const mainName = toPascalCase(dir);
	files.sort((a, b) => {
		const rank = (file) => {
			if (file.language === "css") return 2;
			if (file.name.startsWith(mainName)) return 0;
			return 1;
		};
		const rankDiff = rank(a) - rank(b);
		return rankDiff !== 0 ? rankDiff : a.name.localeCompare(b.name);
	});
}

export const getProblemFiles = (dir) => filesByDir[dir] ?? [];
