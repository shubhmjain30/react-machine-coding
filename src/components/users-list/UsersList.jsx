import { useEffect, useState } from "react";
import "./users-list.css";

const UsersList = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setLoading(true);
				setError(null);
				let res = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);

				if (!res.ok) {
					throw new Error("Failed to fetch users");
				}

				res = await res.json();
				setUsers(res);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	if (loading) {
		return (
			<div className="problem-container">
				<h2>Users List - API Integration</h2>
				<p>
					Fetching users from JSONPlaceholder API with proper loading
					and error handling.
				</p>
				<div className="loading">Loading users...</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="problem-container">
				<h2>Users List - API Integration</h2>
				<p>
					Fetching users from JSONPlaceholder API with proper loading
					and error handling.
				</p>
				<div className="error">Error: {error}</div>
			</div>
		);
	}

	return (
		<div className="problem-container">
			<h2>Users List - API Integration</h2>
			<p>
				Fetching users from JSONPlaceholder API with proper loading and
				error handling.
			</p>

			<div className="users-container">
				{users.map(
					({
						id,
						name,
						username,
						email,
						phone,
						website,
						address,
						company,
					}) => {
						return (
							<div className="user-card" key={id}>
								<div className="user-avatar">{name[0]}</div>
								<div className="user-info">
									<div className="user-header">
										<div className="user-name">
											<span className="name">{name}</span>
											<span className="username">
												@{username}
											</span>
										</div>
										<span className="email">{email}</span>
									</div>
									<div className="user-details">
										<div className="detail-item">
											<span className="label">
												Phone:
											</span>
											<span>{phone}</span>
										</div>
										<div className="detail-item">
											<span className="label">
												Website:
											</span>
											<span>{website}</span>
										</div>
										<div className="detail-item">
											<span className="label">
												Company:
											</span>
											<span>{company.name}</span>
										</div>
										<div className="detail-item">
											<span className="label">City:</span>
											<span>{address.city}</span>
										</div>
									</div>
								</div>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
};

export default UsersList;
