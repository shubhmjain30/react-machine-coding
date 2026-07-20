import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CodeViewer from "./CodeViewer";
import ConsolePanel from "./console-panel/ConsolePanel";
import { clearEntries } from "./console-panel/consoleStore";
import "./problem-wrapper.css";

const ProblemWrapper = ({ title, description, files, children }) => {
	const [view, setView] = useState("preview");

	useEffect(() => {
		clearEntries();
	}, [title]);

	return (
		<div className="problem-wrapper">
			<div className="problem-header-section">
				<Link to="/" className="back-arrow">
					←
				</Link>
			</div>
			<div className="problem-main-content">
				<h1 className="problem-title">{title}</h1>
				<p className="problem-description">{description}</p>
				<div className="problem-view-toggle">
					<button
						type="button"
						className={`problem-view-toggle-button ${
							view === "preview" ? "active" : ""
						}`}
						onClick={() => setView("preview")}
					>
						Preview
					</button>
					<button
						type="button"
						className={`problem-view-toggle-button ${
							view === "code" ? "active" : ""
						}`}
						onClick={() => setView("code")}
					>
						Code
					</button>
				</div>
				<div className="problem-content">
					{view === "preview" ? children : <CodeViewer files={files} />}
				</div>
				{view === "preview" && <ConsolePanel />}
			</div>
		</div>
	);
};

export default ProblemWrapper;
