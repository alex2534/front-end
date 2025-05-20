import React from "react";
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Tooltip,
	Legend,
} from "recharts";
import { Paper, Typography } from "@mui/material";

const data = [
	{ name: "Electronics", value: 400 },
	{ name: "Clothing", value: 300 },
	{ name: "Groceries", value: 300 },
	{ name: "Books", value: 200 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const PieChartCard: React.FC = () => {
	return (
		<Paper sx={{ p: 2, backgroundColor: "#2f2f44", color: "#fff" }}>
			<Typography variant="h6" gutterBottom>
				Product Category Share
			</Typography>
			<ResponsiveContainer width="100%" height={250}>
				<PieChart>
					<Pie
						data={data}
						dataKey="value"
						nameKey="name"
						outerRadius={80}
						label
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Tooltip />
					<Legend />
				</PieChart>
			</ResponsiveContainer>
		</Paper>
	);
};

export default PieChartCard;
