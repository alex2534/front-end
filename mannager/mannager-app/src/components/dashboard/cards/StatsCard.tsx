import React from "react";
import styles from "./statsCard.module.css";
import { Box } from "@mui/material";

type Props = {
	title: string;
	value: string;
	footer: string;
	color?: "green" | "red";
	icon?: React.ReactNode;
};

const StatsCard: React.FC<Props> = ({ title, value, footer, color, icon }) => {
	return (
		<Box className={styles.card}>
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<span className={styles.title}>{title}</span>
				{icon}
			</Box>
			<div className={styles.value}>{value}</div>
			<div className={color === "red" ? styles.red : styles.footer}>
				{footer}
			</div>
		</Box>
	);
};

export default StatsCard;
