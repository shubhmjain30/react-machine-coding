// @ts-ignore: allow side-effect CSS import without module declarations
import "./grid-lights.css";

interface CellsProps {
	key: number;
	shape: "circle" | "square" | "rounded";
	isActive: boolean;
	onClick: () => void;
}

const Cell = ({ shape, isActive, onClick }: CellsProps) => {
	return (
		<div
			className={`cell ${shape} ${isActive ? "active" : ""}`}
			onClick={onClick}
		></div>
	);
};

export default Cell;
