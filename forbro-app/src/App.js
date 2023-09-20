import React from "react";
import ProductGrid from "./containers/productGrid";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import { Box, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Box className="w-full h-full p-4">
			<Navbar />
			<Container>
				<Routes>
					<Route path="/catalogo" element={<ProductGrid />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Container>
		</Box>
	);
}

export default App;
