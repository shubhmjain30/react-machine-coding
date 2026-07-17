import { useEffect, useState } from "react";
import "./progress-bar.css";

const MAX_PERCENT = 100;
const DURATION = 200;

const clamp = (value, min = 0, max = MAX_PERCENT) =>
	Math.min(max, Math.max(min, value));

const ProgressBar = () => {
	const [progressValue, setProgressValue] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setProgressValue((prev) => {
				if (prev >= MAX_PERCENT) {
					clearInterval(intervalId);
					return prev;
				}
				let next = prev;
				next = clamp(prev + 1);
				return next;
			});
		}, DURATION);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="container">
			<Bar value={progressValue} />
		</div>
	);
};

const Bar = ({ value }) => {
	return (
		<div className="progress-bar">
			<div className="progress-bar-track">
				<span>{value}%</span>

				<div
					className="progress-fill"
					style={{
						transform: `scaleX(${value / 100})`,
					}}
				/>
			</div>
		</div>
	);
};

export default ProgressBar;
