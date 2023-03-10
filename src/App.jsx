import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Layout>
	);
}

export default App;
