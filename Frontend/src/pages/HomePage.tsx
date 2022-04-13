import { useEffect, useState } from "react";

import { CardHeader, Grid, Typography } from "@mui/material";

import { HoverCard } from "../components/HoverCard";
import { Header } from "../components/Header";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { chartOptions } from "./chartStyling";

const appendData = (a: any[]) => [
	...a,
	{
		y: Math.log(a.length + 1 * Math.random() * 100) ** 2,
		x: Date.now() + a.length * 60 * 60 * 60,
		name: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
	},
];

export const HomePage = () => {
	const [chartData, setChartData] = useState([] as any[]);
	const [chartData2, setChartData2] = useState([] as any[]);
	const [chartData3, setChartData3] = useState([] as any[]);

	const upData = () => {
		setChartData(appendData);
		setChartData2(appendData);
		setChartData3(appendData);
		console.log(chartData.length);
	};

	useEffect(() => {
		setInterval(upData, 1000);
	}, []);

	return (
		<Grid container direction="column" justifyContent="center" alignItems="center" style={{ textAlign: "center", padding: 25 }}>
			<Grid item>
				<Header />
			</Grid>

			<br />
			<br />
			<br />
			<br />

			<Grid item>
				<Typography variant="h1">Live Stats</Typography>
				<br />
				<br />
				<Grid spacing={10} container direction="row" justifyContent="center" alignItems="center">
					<Grid item>
						<HoverCard>
							<HighchartsReact highcharts={Highcharts} options={chartOptions(chartData)} />
							<CardHeader style={{ padding: 25 }} title={<Typography variant="h3">1</Typography>} subheader="Videos downloaded" />
						</HoverCard>
					</Grid>
					<Grid item>
						<HoverCard>
							<HighchartsReact highcharts={Highcharts} options={chartOptions(chartData2)} />
							<CardHeader style={{ padding: 25 }} title={<Typography variant="h3">12.5GB</Typography>} subheader="Bytes downloaded" />
						</HoverCard>
					</Grid>
					<Grid item>
						<HoverCard>
							<HighchartsReact highcharts={Highcharts} options={chartOptions(chartData3)} />
							<CardHeader style={{ padding: 25 }} title={<Typography variant="h3">10.5Mb/s</Typography>} subheader="Peak bandwidth" />
						</HoverCard>
					</Grid>
				</Grid>
			</Grid>
			<br />
			<br />
			<br />
			<br />
		</Grid>
	);
};
