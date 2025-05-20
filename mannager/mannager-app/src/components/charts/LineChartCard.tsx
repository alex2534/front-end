import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { Paper, Typography } from "@mui/material";

const data = [
	{ name: "Jan", stock: 400 },
	{ name: "Feb", stock: 300 },
	{ name: "Mar", stock: 500 },
	{ name: "Apr", stock: 200 },
	{ name: "May", stock: 350 },
];

const LineChartCard: React.FC = () => {
	return (
		<Paper sx={{ p: 2, backgroundColor: "#2f2f44", color: "#fff" }}>
			<Typography variant="h6" gutterBottom>
				Inventory Over Time
			</Typography>
			<ResponsiveContainer width="100%" height={250}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Line type="monotone" dataKey="stock" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</Paper>
	);
};

export default LineChartCard;
