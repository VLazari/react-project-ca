import "./index.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Success from "./pages/Success";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/success" element={<Success />} />
			</Routes>
		</Layout>
	);
}

export default App;
