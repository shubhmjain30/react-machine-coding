import "./app-shell.css";

const AppShell = () => {
	return (
		<div className="app-shell-container">
			<div className="app-shell-grid">
				<TopBar />
				<SideBar />
				<MainContent />
				<Footer />
			</div>
		</div>
	);
};

export default AppShell;

const TopBar = () => {
	return <div className="app-shell-topbar">TopBar</div>;
};

const SideBar = () => {
	return <div className="app-shell-sidebar">SideBar</div>;
};

const MainContent = () => {
	return <div className="app-shell-main">Main Content</div>;
};

const Footer = () => {
	return <div className="app-shell-footer">Footer</div>;
};
