import React from "react";
import styles from "./Layout.module.css";
import { Avatar, IconButton, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			{/* Sidebar */}
			<Sidebar />

			<div className={styles.sidebar}>
				{/* You can replace with icons */}
				<Typography variant="h6" color="white" gutterBottom>
					🧭
				</Typography>
				<Typography>📦</Typography>
				<Typography>📈</Typography>
				<Typography>⚙️</Typography>
			</div>

			{/* Main Content Area */}
			<div className={styles.content}>
				<Topbar />
				{children}
				<div className={styles.topbar}>
					{/* <Typography variant="h6">Hello, Ducky</Typography> */}
					{/* <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
						<Typography variant="body2">26 / 12 / 2023</Typography>
						<IconButton>
							<NotificationsIcon sx={{ color: "white" }} />
						</IconButton>
						<IconButton>
							<SettingsIcon sx={{ color: "white" }} />
						</IconButton>
						<Avatar alt="Ducky Lee" src="" />
					</div> */}
				</div>

				{/* Dashboard content */}
				{/* <main className={styles.main}>{children}</main> */}
			</div>
		</div>
	);
};

export default Layout;
