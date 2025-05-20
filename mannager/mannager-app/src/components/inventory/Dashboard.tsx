import React from "react";
import {
	Box,
	Typography,
	Card,
	CardContent,
	Button,
	Stack,
} from "@mui/material";
import styles from "./Dashboard.module.css";

const mockInventory = [
	{ id: 1, name: "Laptop", quantity: 5 },
	{ id: 2, name: "Monitor", quantity: 10 },
	{ id: 3, name: "Keyboard", quantity: 15 },
];

const Dashboard: React.FC = () => {
	return (
		<Box className={styles.container}>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				mb={2}
			>
				<Typography variant="h4" className={styles.header}>
					Inventory Dashboard
				</Typography>
				<Button variant="contained">Add Item</Button>
			</Stack>

			<Box className={styles.inventoryList}>
				{mockInventory.map((item) => (
					<Card key={item.id} sx={{ minWidth: 200 }}>
						<CardContent>
							<Typography variant="h6">{item.name}</Typography>
							<Typography color="text.secondary">
								Quantity: {item.quantity}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Box>
		</Box>
	);
};

export default Dashboard;
