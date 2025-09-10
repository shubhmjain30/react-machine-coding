import { useState } from "react";
import "./counter-app.css";

const CounterApp = () => {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);

	const increment = () => setCount((prev) => prev + step);
	const decrement = () => setCount((prev) => prev - step);
	const reset = () => setCount(0);

	return (
		<div className="problem-container">
			<h2>Counter Application</h2>
			<p>
				A simple counter with customizable step value and multiple
				operations.
			</p>

			<div className="counter-demo">
				<div className="counter-display">
					<span className="count-value">{count}</span>
				</div>

				<div className="step-control">
					<label htmlFor="step">Step Value:</label>
					<input
						id="step"
						type="number"
						value={step}
						onChange={(e) => setStep(Number(e.target.value))}
						min="1"
						className="step-input"
					/>
				</div>

				<div className="counter-controls">
					<button onClick={decrement} className="btn btn-danger">
						- {step}
					</button>
					<button onClick={reset} className="btn btn-secondary">
						Reset
					</button>
					<button onClick={increment} className="btn btn-success">
						+ {step}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CounterApp;
