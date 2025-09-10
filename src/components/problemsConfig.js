import CounterApp from "./counter-app/CounterApp";
import FolderStructure from "./folder-structure/FolderStructure";
import UsersList from "./users-list/UsersList";

export const problems = [
	{
		id: "counter-app",
		title: "Counter Application",
		description:
			"Build a counter with customizable step value and multiple operations",
		difficulty: "Easy",
		topics: ["State Management", "Event Handling", "Controlled Components"],
		component: CounterApp,
	},
	{
		id: "users-list",
		title: "Users List - API Integration",
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
		id: "folder-structure",
		title: "Folder Structure Renderer",
		description:
			"Render a nested folder structure with files and folders using recursive components",
		difficulty: "Easy",
		topics: ["Recursion", "Component Composition", "Data Structures"],
		component: FolderStructure,
	},
];
