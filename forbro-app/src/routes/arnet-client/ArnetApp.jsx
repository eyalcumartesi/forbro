import React from "react";
import ProductGrid from "../../containers/ProductGrid";
import Home from "../../containers/Home";
import Navbar from "../../components/Navbar";
import { Box, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import MarsutexApp from "../marsutex-client/MarsutexApp";
import imageCover from "./arnet-cover.png";
import HeroImage from "./hero-image.jpeg";

const navItems = [
	{
		name: "Home",
		link: "/arnet",
	},
	{
		name: "Catalogo",
		link: "/arnet/catalogo",
	},
	{
		name: "Marsutex",
		link: "/",
	},
	{
		name: "Contactanos",
		link: "/arnet/contactus",
	},
];

function ArnetApp() {
	return (
		<Box>
			<Navbar navItems={navItems} name={"Arnet Intima"} />
			<Container>
				<Routes basename="/arnet">
					<Route path="/catalogo" element={<ProductGrid />} />
					<Route
						path="/"
						element={
							<Home name={"ARNET"} image={imageCover} heroImage={HeroImage} />
						}
					/>
					<Route path="../" element={<MarsutexApp />} />
				</Routes>
			</Container>
		</Box>
	);
}

export default ArnetApp;
