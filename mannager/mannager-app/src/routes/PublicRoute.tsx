import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { JSX } from "react";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	);
	return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
