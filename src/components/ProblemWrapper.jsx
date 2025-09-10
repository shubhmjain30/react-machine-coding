import { Link } from "react-router-dom";
import "./problem-wrapper.css";

const ProblemWrapper = ({ title, description, children }) => {
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
				<div className="problem-content">{children}</div>
			</div>
		</div>
	);
};

export default ProblemWrapper;
