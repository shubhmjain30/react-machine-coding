import CounterApp from "./counter-app/CounterApp";
import FolderStructure from "./folder-structure/FolderStructure";
import TrafficSignal from "./traffic-signal/TrafficSignal";
import UsersList from "./users-list/UsersList";

export const problems = [
	{
		id: "counter-app",
		title: "Counter",
		description:
			"Build a counter with customizable step value and multiple operations",
		difficulty: "Easy",
		topics: ["State Management", "Event Handling", "Controlled Components"],
		component: CounterApp,
	},
	{
		id: "users",
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
		id: "signal",
		title: "Traffic Signal",
		description:
			"Create a traffic signal component with red, yellow, and green lights that change automatically based on a timer",
		difficulty: "Easy",
		topics: ["Timers", "useEffect Hook"],
		component: TrafficSignal,
	},
	{
		id: "folder-structure",
		title: "Folder Structure",
		description:
			"Render a nested folder structure with files and folders using recursive components",
		difficulty: "Easy",
		topics: ["Recursion", "Component Composition", "Data Structures"],
		component: FolderStructure,
	},
];
