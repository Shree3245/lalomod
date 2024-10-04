import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Login from "./components/AuthPages/Login";
import Dashboard from "./components/Dashboard/App";
import Organization from "./components/Organization/App";

import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/layout/Layout";

import "./App.css";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route element={<ProtectedRoute />}>
						<Route element={<Layout />}>
							<Route path="/dashboard" element={<Dashboard />} />
							<Route
								path="/organization"
								element={<Organization />}
							/>
							{/* Add other protected routes here */}
						</Route>
					</Route>
					<Route
						path="/"
						element={<Navigate to="/login" replace />}
					/>
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
