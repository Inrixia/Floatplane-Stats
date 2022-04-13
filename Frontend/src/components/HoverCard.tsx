import { CardProps, Card } from "@mui/material";
import { useState } from "react";

export const HoverCard = (props: CardProps) => {
	const [raised, setRaised] = useState(false);
	return <Card onMouseOver={() => setRaised(true)} onMouseOut={() => setRaised(false)} raised={raised} {...props} />;
};
