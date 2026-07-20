import { useState } from "react";

const CustomPromise = () => {
	const [runCount, setRunCount] = useState(0);

	const run = () => {
		import(/* @vite-ignore */ `./custom-promise.js?t=${runCount}`).catch(
			(err) => console.error(err),
		);
		setRunCount((c) => c + 1);
	};

	return (
		<div style={{ padding: "1rem" }}>
			<button type="button" onClick={run}>
				{runCount === 0 ? "Run" : "Run again"}
			</button>
			<p>Logs and errors show up in the Console panel below.</p>
		</div>
	);
};

export default CustomPromise;
