import { lazy } from "react";

const CounterApp = lazy(() => import("./counter-app/CounterApp"));
const CustomPromise = lazy(() => import("./custom-promise/CustomPromise"));
const FolderStructure = lazy(
	() => import("./folder-structure/FolderStructure"),
);
const GridLights = lazy(() => import("./grid-lights/GridLights"));
const OtpInput = lazy(() => import("./otp-input/OtpInput"));
const ProgressBar = lazy(() => import("./progress-bar/ProgressBar"));
const TicTacToe = lazy(() => import("./tic-tac-toe/TicTacToe"));
const TrafficSignal = lazy(() => import("./traffic-signal/TrafficSignal"));
const UsersList = lazy(() => import("./users-list/UsersList"));

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
		difficulty: "Easy",
		topics: ["State Management", "Refs", "Event Handling"],
		component: OtpInput,
	},
	{
		id: "async-pool",
		dir: "async-pool",
		title: "Async Pool",
		description:
			"Implement an async pool function that limits the number of concurrent promises being executed.",
		difficulty: "Medium",
		topics: ["Concurrency", "Promises", "Async/Await"],
		component: () => null, // Placeholder component
	},
	{
		id: "debounce-throttle",
		dir: "debounce-throttle",
		title: "Debounce and Throttle",
		description:
			"Implement debounce and throttle functions to control the rate of function execution.",
		difficulty: "Easy",
		topics: ["Debouncing", "Throttling", "Event Handling"],
		component: () => null, // Placeholder component
	},
	{
		id: "custom-promise",
		dir: "custom-promise",
		title: "Custom Promise",
		description:
			"Implement a custom Promise class that mimics the behavior of native JavaScript Promises.",
		difficulty: "Hard",
		topics: ["Promises", "Asynchronous Programming", "JavaScript"],
		component: CustomPromise,
	},
];
