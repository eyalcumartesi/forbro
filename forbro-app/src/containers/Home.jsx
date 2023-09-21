import React from "react";
// import About from "../components/About";

import { Container, Button } from "@mui/material";

const Home = ({ name, image, heroImage }) => {
	const arnetSX = {
		background: "#590D22",
		color: "#FFF0F3",
		"&:hover": {
			background: "#FFF0F3",
			color: "#590D22",
		},
		padding: "12px",
		width: "200px",
		opacity: 1,
	};

	const forbroSX = {
		background: "#2B2D42",
		color: "#EDF2F4",
		"&:hover": {
			background: "#EDF2F4",
			color: "#2B2D42",
		},
		padding: "12px",
		width: "200px",
		opacity: 1,
	};
	return (
		<Container className="flex flex-col h-full w-full">
			<div
				className="absolute inset-0 z-0 bg-cover bg-center flex flex-col gap-4 items-center justify-center h-screen mb-24"
				style={{ backgroundImage: `url(${heroImage})` }}
			>
				{/* <Typography
					align="center"
					variant="h1"
					sx={{ fontWeight: 700, fontSize: "150px", opacity: 1 }}
				>
					{name}
				</Typography> */}
				<img
					src={image}
					width={"800px"}
					alt={name}
					className="opacity-70"
					loading="lazy"
				/>
				<div className="flex gap-4">
					<Button
						sx={name === "ARNET" ? arnetSX : forbroSX}
						href="mailto:ersel@marsutex.com"
					>
						Contactanos
					</Button>
					<Button
						sx={name === "ARNET" ? arnetSX : forbroSX}
						href={`/${name.toLowerCase()}/catalogo`}
					>
						Catalogo
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default Home;
