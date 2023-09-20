import React from "react";
import About from "../components/About";
import { Container, Typography, Button } from "@mui/material";

const Home = () => {
	return (
		<Container className="flex flex-col h-full w-full">
			<div className="flex flex-col gap-4 items-center justify-center h-screen mb-24">
				<Typography
					align="center"
					variant="h1"
					sx={{ fontWeight: 800, fontSize: "150px" }}
				>
					FORBRO
				</Typography>
				<div className="flex gap-4">
					<Button
						sx={{
							background: "#EF233C",
							color: "#EDF2F4",
							"&:hover": {
								background: "#EDF2F4",
								color: "#EF233C",
							},
							padding: "12px",
							width: "200px",
						}}
						href="mailto:erselcumartesi@gmail.com"
					>
						Contactanos
					</Button>
					<Button
						sx={{
							background: "#2B2D42",
							color: "#EDF2F4",
							"&:hover": {
								background: "#EDF2F4",
								color: "#2B2D42",
							},
							padding: "12px",
							width: "200px",
						}}
						href="/catalogo"
					>
						Catalogo
					</Button>
				</div>
			</div>
			<About />
		</Container>
	);
};

export default Home;
