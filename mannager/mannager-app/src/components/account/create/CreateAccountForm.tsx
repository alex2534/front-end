import { useState } from "react";
import { TextField, Button, Typography, Box, Link } from "@mui/material";
import styles from "./CreateAccountForm.module.css";
import { useNavigate } from "react-router-dom";

const CreateAccountForm = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({ name: "", email: "", password: "" });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Creating account:", form);
	};

	return (
		<Box className={styles.container}>
			<Box component="form" onSubmit={handleSubmit} className={styles.form}>
				<Typography variant="h5" textAlign="center" mb={2}>
					Create Account
				</Typography>

				<TextField
					fullWidth
					label="Name"
					name="name"
					value={form.name}
					onChange={handleChange}
					margin="normal"
					required
				/>
				<TextField
					fullWidth
					label="Email"
					name="email"
					type="email"
					value={form.email}
					onChange={handleChange}
					margin="normal"
					required
				/>
				<TextField
					fullWidth
					label="Password"
					name="password"
					type="password"
					value={form.password}
					onChange={handleChange}
					margin="normal"
					required
				/>

				<Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
					Sign Up
				</Button>

				<Box mt={2} textAlign="center">
					<Typography variant="body2">
						Already have an account?{" "}
						<Link href="#" onClick={() => navigate("/login")}>
							Log In
						</Link>
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default CreateAccountForm;
