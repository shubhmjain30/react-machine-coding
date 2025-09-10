import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { problems } from "./components/problemsConfig";
import ProblemsIndex from "./components/ProblemsList";
import ProblemWrapper from "./components/ProblemWrapper";
import "./styles/global.css";

function App() {
	return (
		<Router>
			<div className="app">
				<main className="main-content">
					<Routes>
						<Route path="/" element={<ProblemsIndex />} />
						{problems.map((problem) => {
							const Component = problem.component;
							return (
								<Route
									key={problem.id}
									path={`/${problem.id}`}
									element={
										<ProblemWrapper
											title={problem.title}
											description={problem.description}
										>
											<Component />
										</ProblemWrapper>
									}
								/>
							);
						})}
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
