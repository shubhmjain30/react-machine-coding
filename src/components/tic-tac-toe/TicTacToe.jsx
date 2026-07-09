import { useState } from "react";
import "./tic-tac-toe.css";

const WINNER_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // all rows
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // all columns
	[0, 4, 8],
	[2, 4, 6], // all diagonals
];

const calculateWinner = (squares) => {
	for (let i = 0; i < WINNER_COMBINATIONS.length; i++) {
		const [a, b, c] = WINNER_COMBINATIONS[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[b] === squares[c]
		) {
			return squares[a];
		}
	}

	return null;
};

const detectDraw = (squares) => {
	for (let i = 0; i < squares.length; i++) {
		if (squares[i] === null) {
			return false;
		}
	}

	return true;
};

const Square = ({ value, disabled, onClick }) => {
	return (
		<div
			className={`square ${disabled ? "disabled" : ""}`}
			onClick={onClick}
		>
			{value}
		</div>
	);
};

const getEmptyArray = () => {
	return Array.from({ length: 9 }).fill(null);
};

const TicTacToe = () => {
	const [squares, setSquares] = useState(getEmptyArray());
	const [isXNext, setIsXNext] = useState(true);

	const winner = calculateWinner(squares);
	const isDraw = winner ? false : detectDraw(squares);

	const handleReset = () => {
		setSquares(getEmptyArray());
		setIsXNext(true);
	};

	const handleClick = (index) => {
		if (squares[index] != null || winner != null) {
			return;
		}

		setSquares((prevSquares) => {
			const nextSquares = [...prevSquares];
			nextSquares[index] = isXNext ? "X" : "O";
			return nextSquares;
		});
		setIsXNext((prev) => !prev);
	};

	return (
		<div className="container">
			<div className="info">
				{winner ?
					`🏆 Winner: ${winner}`
				: isDraw ?
					"🤝 It's a Draw!"
				:	`Next Player: ${isXNext ? "X" : "O"}`}
			</div>

			<div className="tic-tac-toe-grid">
				{squares.map((value, index) => {
					return (
						<Square
							key={index}
							value={value}
							disabled={winner || isDraw}
							onClick={() => handleClick(index)}
						/>
					);
				})}
			</div>

			<button className="button" onClick={handleReset}>
				Reset
			</button>
		</div>
	);
};

export default TicTacToe;
