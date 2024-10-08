// components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar/App";
import "./Layout.css";

const Layout = () => {
	return (
		<div className="layout">
			<Sidebar />
			<main className="main-content">
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
