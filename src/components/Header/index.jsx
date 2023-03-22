import React from "react";
import Nav from "../Nav";
import CartIcon from "../CartIcon";
import Logo from "../../assets/logo.png";

export default function Header() {
	return (
		<div className="sticky top-0 z-20 bg-slate-900 text-white opacity-95">
			<div className="max-w-7xl mx-auto flex px-10 justify-between items-center">
				<img className="h-16" src={Logo} alt="Logo" />
				<Nav />
				<CartIcon />
			</div>
		</div>
	);
}
