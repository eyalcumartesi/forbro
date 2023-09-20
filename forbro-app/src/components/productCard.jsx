import React from "react";
import { Card, CardHeader } from "@mui/material";

function ProductCard({ imageUrl, index }) {
	// Define a custom style for resizing the images
	const imageStyle = {
		width: "250px", // Adjust the width as needed
		height: "auto", // Maintain the aspect ratio
	};

	return (
		<Card className="flex flex-col items-center p-4 gap-0">
			<img src={imageUrl} alt="Sock" style={imageStyle} />
			<CardHeader title={index} />
		</Card>
	);
}

export default ProductCard;
