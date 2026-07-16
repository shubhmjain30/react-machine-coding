// @ts-ignore: allow side-effect CSS import without module declarations
import "./grid-lights.css";

interface CellsProps {
	shape?: "circle" | "square" | "rounded";
	isActive: boolean;
	onClick: () => void;
}

const Cell = ({ shape = "rounded", isActive, onClick }: CellsProps) => {
	return (
		<div
			className={`cell ${shape} ${isActive ? "active" : ""}`}
			onClick={!isActive ? onClick : undefined}
		></div>
	);
};

export default Cell;
