import { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			let res = await fetch("https://jsonplaceholder.typicode.com/users");
			res = await res.json();
			setUsers(res);
		};

		fetchUsers();
	}, []);

	return (
		<div className="container">
			{users.map(({ id, name, username, email }) => {
				return (
					<div className="user" key={id}>
						<div className="user-avatar">{name[0]}</div>
						<div className="user-info">
							<div className="user-name">
								<span>{name}</span>
								<span>{username}</span>
							</div>
							<span>{email}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Users;
