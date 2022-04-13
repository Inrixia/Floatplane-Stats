import { Route, Routes } from "react-router-dom";

import { Error404 } from "./components";

// Pages
import { HomePage } from "./pages/HomePage";
import { FAQ } from "./pages/FAQ";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { deepOrange, amber } from "@mui/material/colors";

const App = () => {
	const theme = createTheme({
		palette: {
			mode: "dark",
			background: {
				default: "#202020",
				paper: "#202020",
			},
			primary: deepOrange,
			secondary: amber,
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: {
						"::-webkit-scrollbar, & *::-webkit-scrollbar": {
							width: "5px",
						},

						/* Track */
						"::-webkit-scrollbar-track": {
							background: "#e5e5e5",
						},

						/* Handle */
						"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
							background: "#888",
						},

						/* Handle on hover */
						"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
							background: "#555",
						},
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/FAQ" element={<FAQ />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</ThemeProvider>
	);
};

export default App;
