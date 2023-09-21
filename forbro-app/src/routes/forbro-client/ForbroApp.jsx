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
		name: "Bebe",
		link: "/forbro/baby",
	},
	{
		name: "Hombre",
		link: "/forbro/men",
	},
	{
		name: "Marsutex",
		link: "/",
	},
	{
		name: "Contactanos",
		link: "mailto:ersel@marsutex.com",
	},
];

function ForbroApp() {
	return (
		<Box>
			<Navbar navItems={navItems} name={"FORBRO"} />
			<Container>
				<Routes basename="/forbro">
					<Route path="/men" element={<ProductGrid name={"Hombre"} />} />
					<Route path="/baby" element={<ProductGrid name={"Bebe"} />} />
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
