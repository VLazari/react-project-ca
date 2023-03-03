import React from "react";
import Logo from "../../assets/logo.png";

export default function Footer() {
	return (
		<div className="bg-slate-900 text-white">
			<img className="h-16 mx-auto" src={Logo} alt="Logo" />
		</div>
	);
}
