const RenderFs = ({ fs, isNested }) => {
	return (
		<div className={isNested ? "nested-content" : ""}>
			{fs.map(({ id, label, isFolder, children }) => {
				// folder
				if (isFolder && children.length) {
					return (
						<div key={id}>
							<div className="folder-item">📂 {label}</div>
							<RenderFs fs={children} isNested={true} />
						</div>
					);
				}

				// file
				return (
					<div key={id} className="file-item">
						📃 {label}
					</div>
				);
			})}
		</div>
	);
};

export default RenderFs;
