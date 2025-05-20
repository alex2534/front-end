import React from "react";
import Grid from "@mui/material/Grid";
import StatsCard from "./StatsCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const StatsGrid: React.FC = () => {
	return (
		<Grid container spacing={2}>
			{/* <Grid size={{ xs: 12, sm: 6, md: 3 }}>
				<StatsCard
					title="Current Balance"
					value="$999,999"
					footer="+$123,123 Today"
					icon={<AccountBalanceWalletIcon sx={{ color: "#00bcd4" }} />}
				/>
			</Grid> */}
			{/* <Grid size={{ xs: 12, sm: 6, md: 3 }}>
				<StatsCard
					title="Income"
					value="$223,324"
					footer="+$142,245 Today"
					icon={<TrendingUpIcon sx={{ color: "#4caf50" }} />}
				/>
			</Grid> */}
			{/* <Grid size={{ xs: 12, sm: 6, md: 3 }}>
				<StatsCard
					title="Expense"
					value="$123,434"
					footer="-$123,123 Today"
					icon={<TrendingDownIcon sx={{ color: "#ef5350" }} />}
					color="red"
				/>
			</Grid> */}
			{/* <Grid size={{ xs: 12, sm: 6, md: 3 }}>
				<StatsCard
					title="Nearest Delivery"
					value="26.12.23"
					footer="Responsible for delivery"
					icon={<LocalShippingIcon sx={{ color: "#ffb300" }} />}
				/>
			</Grid> */}
		</Grid>
	);
};

export default StatsGrid;
