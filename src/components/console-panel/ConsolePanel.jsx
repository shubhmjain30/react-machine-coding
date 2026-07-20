import { useState, useSyncExternalStore } from "react";
import {
	clearEntries,
	formatArg,
	getEntries,
	patchConsole,
	subscribe,
} from "./consoleStore";
import "./console-panel.css";

patchConsole();

const ConsolePanel = () => {
	const entries = useSyncExternalStore(subscribe, getEntries);
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div className="console-panel">
			<div className="console-panel-header">
				<button
					type="button"
					className="console-panel-toggle"
					onClick={() => setCollapsed((c) => !c)}
				>
					{collapsed ? "▸" : "▾"} Console
					{entries.length > 0 ? ` (${entries.length})` : ""}
				</button>
				<button
					type="button"
					className="console-panel-clear"
					onClick={clearEntries}
				>
					Clear
				</button>
			</div>
			{!collapsed && (
				<div className="console-panel-body">
					{entries.length === 0 && (
						<div className="console-panel-empty">No console output yet.</div>
					)}
					{entries.map((entry) => (
						<div key={entry.id} className={`console-entry console-entry-${entry.type}`}>
							{entry.args.map((arg, i) => (
								<pre key={`${entry.id}-${i}`}>{formatArg(arg)}</pre>
							))}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ConsolePanel;
