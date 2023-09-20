import React from "react";
import ProductGrid from "../../containers/ProductGrid";
import Home from "../../containers/Home";
import Navbar from "../../components/Navbar";
import MarsutexApp from "../marsutex-client/MarsutexApp";
import { Box, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import imageCover from "./forbro-cover.png";
import HeroImage from "./hero-image.jpeg";

const navItems = [
	{
		name: "Home",
		link: "/forbro",
	},
	{
		name: "Catalogo",
		link: "/catalogo",
	},
	{
		name: "Marsutex",
		link: "/",
	},
	{
		name: "Contactanos",
		link: "/contactus",
	},
];

function ForbroApp() {
	return (
		<Box>
			<Navbar navItems={navItems} name={"FORBRO"} />
			<Container>
				<Routes basename="/forbro">
					<Route path="/catalogo" element={<ProductGrid />} />
					<Route
						path="/"
						element={
							<Home name={"FORBRO"} image={imageCover} heroImage={HeroImage} />
						}
					/>
					<Route path="../" element={<MarsutexApp />} />
				</Routes>
			</Container>
		</Box>
	);
}

export default ForbroApp;
