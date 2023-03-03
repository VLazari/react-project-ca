import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Layout>
	);
}

export default App;
