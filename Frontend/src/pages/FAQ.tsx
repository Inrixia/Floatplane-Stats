import { Grid, Link, Typography } from "@mui/material";

// Components
import { Header } from "../components/Header";

const floatplaneDownloader = (
	<Link color="secondary" underline="none" href="https://github.com/Inrixia/Floatplane-Downloader">
		Floatplane Downloader
	</Link>
);

const inrixia = (
	<Link color="secondary" underline="none" href="https://github.com/Inrixia">
		@Inrixia
	</Link>
);

const inrixiaDiscord = (
	<Link underline="none" style={{ color: "#7289da" }} href="https://discordapp.com/users/155530711326130176">
		<b>Inrixia#0001</b>
	</Link>
);

const floatplaneStats = (
	<Link color="secondary" underline="none" href="https://github.com/Inrixia/FloatplaneStats">
		Floatplane Stats
	</Link>
);

export const FAQ = () => (
	<Grid container direction="column" justifyContent="center" alignItems="center" style={{ padding: 25 }}>
		<Grid item>
			<Header />
		</Grid>
		<br />
		<br />
		<div style={{ maxWidth: 900 }}>
			<Grid item>
				<Typography variant="h3">What is this site?</Typography>
				<Typography variant="body1">
					This is a site for tracking statistics reported by {floatplaneDownloader}.
					<br />
					{floatplaneDownloader} is a unoffical application writtern by {inrixia} that allows you to download videos from Floatplane. Both it and this site are not
					associated with the Floatplane team in any way.
				</Typography>
			</Grid>
			<br />
			<Grid item>
				<Typography variant="h3">How to contact you?</Typography>
				<Typography variant="body1">
					You can contact me via GitHub {inrixia} or Discord {inrixiaDiscord}
				</Typography>
			</Grid>
			<br />
			<Grid item>
				<Typography variant="h3">Are any metrics user identifiable?</Typography>
				<Typography variant="body1">
					No, all metrics reported are completely anonymous and contain no user information. You can see this for yourself by looking at the code here.
				</Typography>
			</Grid>
			<br />
			<Grid item>
				<Typography variant="h3">How can I contribute to the project?</Typography>
				<Typography variant="body1">
					Both {floatplaneDownloader} and {floatplaneStats} are open source on GitHub, feel free to contribute there.
				</Typography>
			</Grid>
		</div>
	</Grid>
);
