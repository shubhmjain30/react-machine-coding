import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./problems-list.css";
import { problems } from "./problemsConfig";

const DIFFICULTIES = ["Easy", "Medium", "Hard"];
const ALL_TOPICS = [...new Set(problems.flatMap((problem) => problem.topics))].sort();

const ProblemsIndex = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedDifficulty, setSelectedDifficulty] = useState("All");
	const [selectedTopics, setSelectedTopics] = useState([]);
	const [isFiltersOpen, setIsFiltersOpen] = useState(false);

	const toggleTopic = (topic) => {
		setSelectedTopics((prev) =>
			prev.includes(topic)
				? prev.filter((t) => t !== topic)
				: [...prev, topic]
		);
	};

	const clearFilters = () => {
		setSearchTerm("");
		setSelectedDifficulty("All");
		setSelectedTopics([]);
	};

	const filteredProblems = useMemo(() => {
		const query = searchTerm.trim().toLowerCase();

		return problems.filter((problem) => {
			const matchesSearch =
				!query ||
				problem.title.toLowerCase().includes(query) ||
				problem.description.toLowerCase().includes(query);

			const matchesDifficulty =
				selectedDifficulty === "All" || problem.difficulty === selectedDifficulty;

			const matchesTopics =
				selectedTopics.length === 0 ||
				selectedTopics.every((topic) => problem.topics.includes(topic));

			return matchesSearch && matchesDifficulty && matchesTopics;
		});
	}, [searchTerm, selectedDifficulty, selectedTopics]);

	const activeFilterCount =
		(selectedDifficulty !== "All" ? 1 : 0) + selectedTopics.length;

	return (
		<div className="problems-index">
			<header className="header">
				<h1>React Machine Coding Problems</h1>
				<p className="problems-count">
					{filteredProblems.length} of {problems.length} problems
				</p>
			</header>

			<div className="toolbar">
				<input
					type="search"
					className="search-input"
					placeholder="Search problems..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>

				<button
					type="button"
					className={`filters-toggle ${isFiltersOpen ? "open" : ""}`}
					onClick={() => setIsFiltersOpen((prev) => !prev)}
					aria-expanded={isFiltersOpen}
				>
					Filters
					{activeFilterCount > 0 && (
						<span className="filters-badge">{activeFilterCount}</span>
					)}
					<span className="chevron">▾</span>
				</button>
			</div>

			{isFiltersOpen && (
				<div className="filters-panel">
					<div className="filter-group">
						<span className="filter-label">Difficulty</span>
						<div className="filter-options">
							{["All", ...DIFFICULTIES].map((difficulty) => (
								<button
									key={difficulty}
									type="button"
									className={`filter-chip ${
										selectedDifficulty === difficulty ? "active" : ""
									}`}
									onClick={() => setSelectedDifficulty(difficulty)}
								>
									{difficulty}
								</button>
							))}
						</div>
					</div>

					<div className="filter-group">
						<span className="filter-label">Topics</span>
						<div className="filter-options">
							{ALL_TOPICS.map((topic) => (
								<button
									key={topic}
									type="button"
									className={`filter-chip ${
										selectedTopics.includes(topic) ? "active" : ""
									}`}
									onClick={() => toggleTopic(topic)}
								>
									{topic}
								</button>
							))}
						</div>
					</div>

					{activeFilterCount > 0 && (
						<button type="button" className="clear-filters" onClick={clearFilters}>
							Clear filters
						</button>
					)}
				</div>
			)}

			{filteredProblems.length === 0 ? (
				<p className="no-results">No problems match your filters.</p>
			) : (
				<div className="problems-grid">
					{filteredProblems.map((problem) => (
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
			)}
		</div>
	);
};

export default ProblemsIndex;
