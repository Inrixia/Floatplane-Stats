import { CircularProgress, Grid } from "@mui/material";

export const LoadingComponent = () => (
	<Grid container direction="column" alignItems="center" justifyContent="center">
		<h1>Loading</h1>
		<CircularProgress />
	</Grid>
);

export const LoadingPage = () => (
	<Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
		<LoadingComponent />
	</Grid>
);
