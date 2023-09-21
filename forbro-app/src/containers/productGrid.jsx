import React from "react";
import ProductCard from "../components/productCard";
import { Container } from "@mui/material";

function ProductGrid({ name }) {
	const Images =
		name === "Brasier"
			? require.context(
					"../images/arnet/brasier",
					false,
					/\.(PNG|JPG|jpg|png)$/
			  )
			: name === "Panties"
			? require.context(
					"../images/arnet/panties",
					false,
					/\.(PNG|JPG|jpg|png)$/
			  )
			: name === "Hombre"
			? require.context("../images/forbro/men", false, /\.(PNG|JPG|jpg|png)$/)
			: name === "Bebe"
			? require.context("../images/forbro/baby", false, /\.(PNG|JPG|jpg|png)$/)
			: null;

	// Get an array of all men sock image URLs
	const ImagesUrl = Images.keys().map(Images);

	// Combine the baby and men sock image URLs
	const allSockImageUrls = [...ImagesUrl];

	return (
		<Container className="mt-20">
			<h1> Catalogo {name}</h1>
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
