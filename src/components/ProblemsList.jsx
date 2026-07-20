import { Link } from "react-router-dom";
import "./problems-list.css";
import { problems } from "./problemsConfig";

const ProblemsIndex = () => {
	return (
		<div className="problems-index">
			<header className="header">
				<h1>React Machine Coding Problems</h1>
				{/* <p>Practice React concepts with real-world coding challenges</p> */}
			</header>

			<div className="problems-grid">
				{problems.map((problem) => (
					<Link
						key={problem.id}
						to={`/${problem.id}`}
						className="problem-card-link"
					>
						<div className="problem-card">
							<div className="problem-header">
								<h3>{problem.title}</h3>
								<span
									className={`difficulty ${problem.difficulty.toLowerCase()}`}
								>
									{problem.difficulty}
								</span>
							</div>

							<p className="problem-description">
								{problem.description}
							</p>

							<div className="topics">
								{problem.topics.map((topic) => (
									<span key={topic} className="topic-tag">
										{topic}
									</span>
								))}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProblemsIndex;
