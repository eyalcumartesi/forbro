import React from "react";
// import ProductGrid from "./containers/ProductGrid";
// import Home from "./containers/Home";
// import MarsutexHome from "./containers/MarsutexHome";
import ForbroApp from "./routes/forbro-client/ForbroApp";
import ArnetApp from "./routes/arnet-client/ArnetApp";
import MarsutexApp from "./routes/marsutex-client/MarsutexApp";
import { Box, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Box className="w-full h-full p-4">
			<Container>
				<Routes>
					<Route path="*" element={<MarsutexApp />} />
					<Route path="/forbro/*" element={<ForbroApp />} />
					<Route path="/arnet/*" element={<ArnetApp />} />
				</Routes>
			</Container>
		</Box>
	);
}

export default App;
