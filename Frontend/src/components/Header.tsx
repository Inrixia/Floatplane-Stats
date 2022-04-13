import { Divider, Grid, Button } from "@mui/material";

export const Header = () => (
	<div style={{ width: 512 }}>
		<Divider />
		<Grid container spacing={5} style={{ height: 100 }} direction="row" justifyContent="center" alignItems="center">
			<Grid item>
				<Button size="large" href="/">
					STATS
				</Button>
			</Grid>
			<Grid item>
				<Button size="large" href="/FAQ">
					FAQ
				</Button>
			</Grid>
		</Grid>
		<Divider />
	</div>
);
