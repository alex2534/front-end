import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
	TextField,
	Button,
	Typography,
	Box,
	Link,
	Stack,
	FormControlLabel,
	Checkbox,
} from "@mui/material";
import styles from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { login } from "../../../store/authSlice";

const LoginForm: React.FC = () => {
	const [rememberMe, setRememberMe] = useState(false);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch<AppDispatch>();

	const navigate = useNavigate();

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		dispatch(login());
		navigate("/dashboard");
	};

	return (
		<Box className={styles.container}>
			{/* Left welcome section */}
			<Box className={styles.welcomeSection}>
				<Box>
					<Typography variant="h4" gutterBottom>
						Welcome Back!
					</Typography>
					<Typography variant="body1">
						Please log in to continue to your dashboard.
					</Typography>
				</Box>
			</Box>

			{/* Right form section */}
			<Box className={styles.formSection}>
				<Box component="form" onSubmit={handleLogin} className={styles.form}>
					<Typography variant="h5" textAlign="center" mb={2}>
						Login
					</Typography>

					<TextField
						fullWidth
						label="Email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						margin="normal"
						required
					/>

					<TextField
						fullWidth
						label="Password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						margin="normal"
						required
					/>

					<Box display="flex" justifyContent="flex-end" mt={1} mb={2}>
						<Link href="#" underline="hover" fontSize="0.9rem">
							Forgot password?
						</Link>
					</Box>
					<FormControlLabel
						control={
							<Checkbox
								checked={rememberMe}
								onChange={(e) => setRememberMe(e.target.checked)}
								color="primary"
							/>
						}
						label="Remember Me"
					/>

					<Button fullWidth variant="contained" type="submit">
						Sign In
					</Button>

					<Stack mt={3} alignItems="center">
						<Typography variant="body2">Don't have an account?</Typography>
						<Button
							variant="text"
							size="small"
							onClick={() => navigate("/create-account")}
						>
							Create Account
						</Button>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};

export default LoginForm;
