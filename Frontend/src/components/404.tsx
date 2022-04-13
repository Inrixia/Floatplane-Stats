import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export const Error404 = () => {
	const navigate = useNavigate();
	return (
		<Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
			<b>Error 404</b>
			Sorry we couldn't find that page...
			<Button onClick={() => navigate(-1)}>Go Back</Button>
		</Grid>
	);
};
