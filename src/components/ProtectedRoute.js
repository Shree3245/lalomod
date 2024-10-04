import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
	const { userId } = useAuth();

	if (!userId) {
		// Redirect them to the /login page if there is no token
		return <Navigate to="/login" replace />;
	} else {
		console.log("ProtectedRoute: User is logged in");
	}

	return <Outlet />;
};

export default ProtectedRoute;
