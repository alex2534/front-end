import {
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.sidebar}>
			<div className={styles.logo}></div>
			<List>
				<ListItemButton onClick={() => navigate("/dashboard")}>
					<ListItemIcon>
						<DashboardIcon sx={{ color: "white" }} />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItemButton>
				<ListItemButton onClick={() => alert("Inventory clicked")}>
					<ListItemIcon>
						<InventoryIcon sx={{ color: "white" }} />
					</ListItemIcon>
					<ListItemText primary="Inventory" />
				</ListItemButton>
				<ListItemButton onClick={() => navigate("/login")}>
					<ListItemIcon>
						<LogoutIcon sx={{ color: "white" }} />
					</ListItemIcon>
					<ListItemText primary="Logout" />
				</ListItemButton>
			</List>
		</div>
	);
};

export default Sidebar;
