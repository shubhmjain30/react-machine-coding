import CounterApp from "./counter-app/CounterApp";
import FolderStructure from "./folder-structure/FolderStructure";
import GridLights from "./grid-lights/GridLights";
import OtpInput from "./otp-input/OtpInput";
import ProgressBar from "./progress-bar/ProgressBar";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import TrafficSignal from "./traffic-signal/TrafficSignal";
import UsersList from "./users-list/UsersList";

type Problem = {
	id: string;
	dir: string;
	title: string;
	description: string;
	difficulty: "Easy" | "Medium" | "Hard";
	topics: string[];
	component: React.ComponentType;
};

export const problems: Problem[] = [
	{
		id: "counter-app",
		dir: "counter-app",
		title: "Counter",
		description:
			"Build a counter with customizable step value and multiple operations",
		difficulty: "Easy",
		topics: ["State Management", "Event Handling", "Controlled Components"],
		component: CounterApp,
	},
	{
		id: "users",
		dir: "users-list",
		title: "Users",
		description:
			"Fetch and display users from an API with loading states and error handling",
		difficulty: "Easy",
		topics: [
			"API Integration",
			"useEffect Hook",
			"Error Handling",
			"Loading States",
		],
		component: UsersList,
	},
	{
		id: "traffic-signal",
		dir: "traffic-signal",
		title: "Traffic Signal",
		description:
			"Create a traffic signal component with red, yellow, and green lights that change automatically based on a timer",
		difficulty: "Easy",
		topics: ["setTimeout", "useEffect Hook"],
		component: TrafficSignal,
	},
	{
		id: "folder-structure",
		dir: "folder-structure",
		title: "Folder Structure",
		description:
			"Render a nested folder structure with files and folders using recursive components",
		difficulty: "Easy",
		topics: ["Recursion", "Component Composition", "Data Structures"],
		component: FolderStructure,
	},
	{
		id: "tic-tac-toe",
		dir: "tic-tac-toe",
		title: "Tic Tac Toe",
		description:
			"Build a Tic Tac Toe game with a 3x3 grid, player turns, and win/draw detection",
		difficulty: "Medium",
		topics: ["Game Logic", "State Management", "Event Handling"],
		component: TicTacToe,
	},
	{
		id: "progress-bar",
		dir: "progress-bar",
		title: "Progress Bar",
		description: "Build a progress bar that fills up over time",
		difficulty: "Easy",
		topics: ["CSS Animations", "State Management", "useEffect Hook"],
		component: ProgressBar,
	},
	{
		id: "grid-lights",
		dir: "grid-lights",
		title: "Grid Lights",
		description:
			"Build a grid of light cells where you can click on cells to activate them, turning them green. When all the cells are activated, all the cells will be deactivated one by one in the reverse order they were activated with 300ms interval in between them.",
		difficulty: "Easy",
		topics: ["State Management", "2-D Array", "Stack"],
		component: GridLights,
	},
	{
		id: "otp-input",
		dir: "otp-input",
		title: "OTP Input",
		description:
			"Build an OTP input component with 6 input fields that automatically focuses on the next field when a digit is entered and allows backspacing to the previous field.",
		difficulty: "Medium",
		topics: ["State Management", "Refs", "Event Handling"],
		component: OtpInput,
	},
];
