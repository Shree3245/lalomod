// AuthContext.js
import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [accessToken, setAccessToken] = useState(null);
	const [userId, setUserId] = useState(null);

	const login = (token, id) => {
		setAccessToken(token);
		setUserId(id);
		console.log("Login successful:", token, id);
		// Set up axios interceptor to include token in all future requests
		axios.interceptors.request.use(
			(config) => {
				config.headers.Authorization = `Bearer ${token}`;
				return config;
			},
			(error) => Promise.reject(error)
		);
	};

	const logout = () => {
		setAccessToken(null);
		setUserId(null);
		// Remove axios interceptor
		axios.interceptors.request.eject(0);
	};

	return (
		<AuthContext.Provider value={{ accessToken, userId, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
