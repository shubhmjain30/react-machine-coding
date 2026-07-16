import { useEffect, useState } from "react";
import Cell from "./Cell";
// @ts-ignore: allow side-effect CSS import without module declarations
import "./grid-lights.css";

const DURATION = 300;

const grid_config: number[][] = [
	[1, 1, 1],
	[1, 0, 1],
	[1, 1, 1],
];

const totalLights = grid_config.flat().filter(Boolean).length;

type Position = [number, number];

const GridLights = () => {
	const [lightStack, setLightStack] = useState<Position[]>([]);
	const [activeLight, setActiveLight] = useState<Set<string>>(new Set());
	const [isClearing, setIsClearing] = useState<boolean>(false);

	const handleCellClick = (rowIndex: number, colIndex: number) => {
		const activeStr = `${rowIndex}-${colIndex}`;
		if (activeLight.has(activeStr)) return;

		setLightStack((prev) => [...prev, [rowIndex, colIndex]]);

		setActiveLight((prev) => {
			const next = new Set(prev);
			next.add(activeStr);

			if (next.size === totalLights) {
				setIsClearing(true);
			}

			return next;
		});
	};

	useEffect(() => {
		let intervalId: number;
		if (!isClearing) return;

		const _lightStack = [...lightStack];
		const timeoutId = setTimeout(() => {
			intervalId = setInterval(() => {
				const last = _lightStack.pop();

				if (!last) {
					setLightStack([]);
					setIsClearing(false);
					clearInterval(intervalId);
					return;
				}

				const lastEleKey = `${last[0]}-${last[1]}`;
				setActiveLight((prev) => {
					const next = new Set(prev);
					next.delete(lastEleKey);
					return next;
				});
			}, DURATION);
		}, DURATION);

		return () => {
			clearTimeout(timeoutId);
			if (intervalId) clearInterval(intervalId);
		};
	}, [lightStack, isClearing]);

	return (
		<div className="grid-lights-container">
			<div
				className="grid-lights"
				style={{
					gridTemplateColumns: `repeat(${grid_config[0].length}, 1fr)`,
				}}
			>
				{grid_config.flatMap((row, rowIndex) =>
					row.map((cell, colIndex) => {
						return cell === 1 ?
								<Cell
									key={`${rowIndex}-${colIndex}`}
									isActive={activeLight.has(
										`${rowIndex}-${colIndex}`,
									)}
									onClick={() => {
										if (isClearing) return;
										handleCellClick(rowIndex, colIndex);
									}}
								/>
							:	<span key={`${rowIndex}-${colIndex}`} />;
					}),
				)}
			</div>
		</div>
	);
};

export default GridLights;
