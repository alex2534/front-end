// import './App.css'

import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import DashboardPage from "./pages/inventory/DashboardPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
	return (
		<>
			<div>
				<Routes>
					<Route
						path="/login"
						element={
							<PublicRoute>
								<LoginPage />
							</PublicRoute>
						}
					/>
					<Route
						path="/create-account"
						element={
							<PublicRoute>
								<CreateAccountPage />
							</PublicRoute>
						}
					/>
					<Route
						path="/dashboard"
						element={
							// <ProtectedRoute>
							<DashboardPage />
							// </ProtectedRoute>
						}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
