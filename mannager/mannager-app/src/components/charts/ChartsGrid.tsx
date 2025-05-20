import React from "react";
import Grid from "@mui/material/Grid";
import PieChartCard from "./PieChartCard";
import LineChartCard from "./LineChartCard";

const ChartsGrid: React.FC = () => {
	return (
		// size={{ xs: 12, sm: 6, md: 3 }}
		<Grid container spacing={2} mt={2}>
			<Grid size={{ xs: 12, sm: 6, md: 6 }}>
				<PieChartCard />
			</Grid>
			<Grid size={{ xs: 12, sm: 6, md: 3 }}>
				<LineChartCard />
			</Grid>
		</Grid>
	);
};

export default ChartsGrid;
