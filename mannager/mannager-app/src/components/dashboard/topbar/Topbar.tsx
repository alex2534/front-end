import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import styles from "./topbar.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { logout } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logout());
		localStorage.removeItem("auth");
		navigate("/login");
	};

	return (
		<AppBar position="static" className={styles.topbar}>
			<Toolbar className={styles.toolbar}>
				<Typography variant="h6" className={styles.title}>
					Dashboard
				</Typography>
				<Button color="inherit" onClick={handleLogout}>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
