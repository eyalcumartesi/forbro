import React from "react";
import ProductCard from "../components/productCard";
import { Container } from "@mui/material";

function ProductGrid() {
	const babySockImages = require.context("../images/baby", false, /\.(PNG)$/);
	const menSockImages = require.context("../images/men", false, /\.(PNG)$/);

	// Get an array of all baby sock image URLs
	const babySockImageUrls = babySockImages.keys().map(babySockImages);

	// Get an array of all men sock image URLs
	const menSockImageUrls = menSockImages.keys().map(menSockImages);

	// Combine the baby and men sock image URLs
	const allSockImageUrls = [...babySockImageUrls, ...menSockImageUrls];

	return (
		<Container className="mt-20">
			<h1>Todos Los Productos </h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{allSockImageUrls.map((imageUrl, index) => (
					<div className="flex justify-center">
						<ProductCard key={index} imageUrl={imageUrl} index={index} />
					</div>
				))}
			</div>
		</Container>
	);
}

export default ProductGrid;
