import React from "react";
import ForbroApp from "../forbro-client/ForbroApp";
import MarsutexHome from "../../containers/MarsutexHome";
import ArnetApp from "../arnet-client/ArnetApp";
import Navbar from "../../components/Navbar";
import { Box, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

const navItems = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Arnet",
		link: "/arnet",
	},
	{
		name: "Forbro",
		link: "/forbro",
	},
	{
		name: "Contactanos",
		link: "mailto:ersel@marsutex.com",
	},
];

function MarsutexApp() {
	return (
		<Box>
			<Navbar navItems={navItems} name={"MARSUTEX"} />
			<Container>
				<Routes>
					<Route path="/forbro" element={<ForbroApp />} />
					<Route path="/" element={<MarsutexHome />} />
					<Route path="/arnet" element={<ArnetApp />} />
				</Routes>
			</Container>
		</Box>
	);
}

export default MarsutexApp;
