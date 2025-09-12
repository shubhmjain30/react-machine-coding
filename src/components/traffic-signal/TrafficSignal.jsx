import { useEffect, useState } from "react";
import "./traffic-signal.css";

const signals = [
	{ id: 1, color: "red", duration: 3 },
	{ id: 2, color: "yellow", duration: 5 },
	{ id: 3, color: "green", duration: 7 },
];

const TrafficSignal = () => {
	const [signal, setSignal] = useState(1);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSignal((prevSignal) => (prevSignal % signals.length) + 1);
		}, signals[signal - 1].duration * 1000);

		return () => clearTimeout(timeout);
	}, [signal]);

	return (
		<div className="signal-wrapper">
			<div className="signal-container">
				{signals.map(({ id, color }) => {
					let signalStatus = signal === id ? "active" : "inactive";
					return (
						<div
							key={id}
							className={`signal-light ${color} ${signalStatus}`}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default TrafficSignal;
