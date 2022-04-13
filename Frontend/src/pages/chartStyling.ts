export const chartOptions = (data: Highcharts.Series["data"]): Highcharts.Options => ({
	series: [
		{
			type: "line",
			data,
			lineWidth: 1,
		},
	],
	title: {
		floating: true,
		text: "",
	},
	legend: {
		enabled: false,
	},
	yAxis: {
		title: {
			text: "",
		},
		labels: {
			enabled: false,
		},
		gridLineWidth: 0,
	},
	xAxis: {
		tickColor: "rgba(255,255,255, 0.45)",
		lineColor: "rgba(255,255,255, 0.30)",
		type: "datetime",
	},
	chart: {
		backgroundColor: "transparent",
		borderColor: "transparent",
		height: 200,
		width: 300,
		marginLeft: 0,
		marginRight: 0,
		marginTop: 0,
	},
	credits: {
		enabled: false,
	},
});
