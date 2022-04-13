import { Snackbar, Alert } from "@mui/material";

type Props = {
	error?: string;
	success?: string;
	onClose: () => void;
};

export const StatusSnackbar = (props: Props) => (
	<>
		<Snackbar open={props.error !== undefined} autoHideDuration={6000} onClose={props.onClose}>
			<Alert severity="error">{props.error}</Alert>
		</Snackbar>
		<Snackbar open={props.success !== undefined} autoHideDuration={6000} onClose={props.onClose}>
			<Alert severity="success">{props.success}</Alert>
		</Snackbar>
	</>
);
