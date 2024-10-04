// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";

// Import icons from react-icons
import {
	MdDashboard,
	MdChat,
	MdSearch,
	MdFolder,
	MdLink,
	MdHelpOutline,
	MdEmail,
	MdExitToApp,
} from "react-icons/md";
import { FaSearchengin } from "react-icons/fa"; // Using this for the logo as an example

const Sidebar = () => {
	const { logout } = useAuth();

	return (
		<div className="sidebar">
			<div className="logo">
				<h1>LA Lomod</h1>
			</div>
			<nav>
				<NavLink
					to="/dashboard"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<MdDashboard /> Activity
				</NavLink>
				<NavLink
					to="/organization"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<MdChat /> Organization
				</NavLink>
				<NavLink
					to="/email"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<MdEmail /> Management User
				</NavLink>
				<NavLink
					to="/search"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<MdSearch /> Staff User
				</NavLink>
				<NavLink
					to="/media"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<MdFolder /> HUD User
				</NavLink>
				<NavLink
					to="/connections"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<MdLink /> Owner/Regional Manager
				</NavLink>
				<NavLink
					to="/help"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<MdHelpOutline /> Property Management
				</NavLink>
			</nav>
			<button className="logout-btn" onClick={logout}>
				<MdExitToApp /> Log Out
			</button>
		</div>
	);
};

export default Sidebar;
