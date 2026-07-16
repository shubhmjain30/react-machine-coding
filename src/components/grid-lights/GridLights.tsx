import Cell from "./Cell";
// @ts-ignore: allow side-effect CSS import without module declarations
import "./grid-lights.css";

// Grid Config

const grid_config: number[][] = [
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
];

const GridLights = () => {
	return (
		<div className="grid-lights-container">
			<div className="grid-lights">
				{grid_config.map((row, rowIndex) => (
					<div className="grid-row" key={rowIndex}>
						{row.map((cell, colIndex) => (
							<Cell
								key={colIndex}
								shape="square"
								isActive={cell === 1}
								onClick={() =>
									console.log(
										`Cell ${rowIndex}-${colIndex} clicked`,
									)
								}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default GridLights;
