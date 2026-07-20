import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";
import "./code-viewer.css";

const CodeViewer = ({ files }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	if (!files || files.length === 0) {
		return <p className="code-viewer-empty">No source files found.</p>;
	}

	const activeFile = files[activeIndex];

	return (
		<div className="code-viewer">
			{files.length > 1 && (
				<div className="code-viewer-file-tabs">
					{files.map((file, index) => (
						<button
							key={file.name}
							type="button"
							className={`code-viewer-file-tab ${
								index === activeIndex ? "active" : ""
							}`}
							onClick={() => setActiveIndex(index)}
						>
							{file.name}
						</button>
					))}
				</div>
			)}
			<Highlight
				theme={themes.github}
				code={activeFile.code.trim()}
				language={activeFile.language}
			>
				{({
					className,
					style,
					tokens,
					getLineProps,
					getTokenProps,
				}) => (
					<pre
						className={`code-viewer-pre ${className}`}
						style={style}
					>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line })}>
								<span className="code-viewer-line-number">
									{i + 1}
								</span>
								{line.map((token, key) => (
									<span
										key={key}
										{...getTokenProps({ token })}
									/>
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
		</div>
	);
};

export default CodeViewer;
