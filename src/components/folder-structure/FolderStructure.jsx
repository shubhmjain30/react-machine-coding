import RenderFs from "./RenderFs";
import "./folder-structure.css";

const fs = [
	{
		id: 1,
		label: "public",
		isFolder: true,
		children: [
			{
				id: 11,
				label: "index.html",
				isFolder: false,
			},
			{
				id: 12,
				label: "assets",
				isFolder: true,
				children: [
					{
						id: 121,
						label: "images",
						isFolder: true,
						children: [
							{
								id: 1211,
								label: "logo.png",
								isFolder: false,
							},
							{
								id: 1212,
								label: "banner.jpg",
								isFolder: false,
							},
						],
					},
					{
						id: 122,
						label: "fonts",
						isFolder: true,
						children: [
							{
								id: 1221,
								label: "roboto.ttf",
								isFolder: false,
							},
						],
					},
				],
			},
		],
	},
	{
		id: 2,
		label: "src",
		isFolder: true,
		children: [
			{
				id: 21,
				label: "components",
				isFolder: true,
				children: [
					{
						id: 211,
						label: "common",
						isFolder: true,
						children: [
							{
								id: 2111,
								label: "Button.jsx",
								isFolder: false,
							},
							{
								id: 2112,
								label: "Input.jsx",
								isFolder: false,
							},
						],
					},
					{
						id: 212,
						label: "layout",
						isFolder: true,
						children: [
							{
								id: 2121,
								label: "Header.jsx",
								isFolder: false,
							},
							{
								id: 2122,
								label: "Footer.jsx",
								isFolder: false,
							},
						],
					},
				],
			},
			{
				id: 22,
				label: "App.js",
				isFolder: false,
			},
			{
				id: 23,
				label: "index.js",
				isFolder: false,
			},
			{
				id: 24,
				label: "styles",
				isFolder: true,
				children: [
					{
						id: 241,
						label: "components",
						isFolder: true,
						children: [
							{
								id: 2411,
								label: "button.css",
								isFolder: false,
							},
							{
								id: 2412,
								label: "input.css",
								isFolder: false,
							},
						],
					},
					{
						id: 242,
						label: "layout",
						isFolder: true,
						children: [
							{
								id: 2421,
								label: "header.css",
								isFolder: false,
							},
							{
								id: 2422,
								label: "footer.css",
								isFolder: false,
							},
						],
					},
				],
			},
		],
	},
	{
		id: 4,
		label: "package.json",
		isFolder: false,
	},
	{
		id: 5,
		label: ".gitignore",
		isFolder: false,
	},
];

const FolderStructure = () => {
	return (
		<div className="problem-container">
			<h2>Folder Structure Renderer</h2>
			<p>
				This component renders a nested folder structure with files and
				folders.
			</p>
			<div className="folder-structure-container">
				<RenderFs fs={fs} />
			</div>
		</div>
	);
};

export default FolderStructure;
