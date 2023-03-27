import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import MobileMenu from "../MobileMenu";

export default function Layout({ children }) {
	return (
		<div className="relative min-h-screen grid grid-rows-[auto,1fr,auto]">
			<Header />
			{children}
			<Footer />
			<MobileMenu />
		</div>
	);
}
