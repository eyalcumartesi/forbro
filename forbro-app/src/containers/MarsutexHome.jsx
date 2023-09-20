import React from "react";
import { Card, Box, Button, Typography, CardContent } from "@mui/material";
import HeroImage from "../routes/marsutex-client/hero-image.jpeg";
import ArnetImage from "../routes/arnet-client/arnet-cover.png";
import ForbroImage from "../routes/forbro-client/forbro-cover.png";

const MarsutexHome = () => {
	return (
		<Box
			className="w-full h-screen absolute z-0 inset-0 bg-center bg-cover flex flex-col items-center justify-center gap-2"
			style={{ backgroundImage: `url(${HeroImage})` }}
		>
			<Typography
				sx={{
					fontSize: "150px",
					fontWeight: 700,
					color: "#FFFFFF",
				}}
			>
				Marsutex
			</Typography>
			<Typography
				sx={{
					fontSize: "40px",
					fontWeight: 500,
					color: "#FFFFFF",
					marginBottom: "12px",
				}}
			>
				Visita Nuestras Marcas
			</Typography>
			<div className="flex flex-row gap-6 w-full items-center justify-center">
				<Card
					className="flex flex-col items-center justify-center p-12 gap-2 "
					sx={{
						background: "#C9184A",
						width: "250px",
						height: "300px",
						opacity: 0.9,
					}}
				>
					<div className="flex flex-grow items-center justify-center">
						<img src={ArnetImage} alt="arnet" width="250px" />
					</div>
					<div className="flex flex-col flex-grow justify-end">
						<Button
							href="/arnet"
							variant="contained"
							sx={{ background: "#D90429" }}
						>
							Ver Mas
						</Button>
					</div>
				</Card>
				<Card
					className="flex flex-col items-center justify-center p-12 gap-2"
					sx={{
						background: "#EDF2F4",
						width: "250px",
						height: "300px",
						opacity: 0.9,
					}}
				>
					<div className="flex flex-grow items-center justify-center">
						<img src={ForbroImage} alt="forbro" width="500px" height="auto" />
					</div>
					<div className="flex flex-col flex-grow justify-end">
						<Button
							href="/forbro"
							variant="contained"
							sx={{ background: "#D90429" }}
						>
							Ver Mas
						</Button>
					</div>
				</Card>
			</div>
		</Box>
	);
};

export default MarsutexHome;
