import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
	const location = useLocation();

	return (
		<ul className="hidden sm:flex flex-row items-center">
			<li>
				<Link
					className={`mx-1 p-2 text-lg font-bold transition ease-in-out delay-150 hover:cursor-pointer hover:opacity-60 ${
						location.pathname === "/" ? "opacity-60" : ""
					}`}
					to="/"
				>
					Home
				</Link>
			</li>
			<li>
				<Link
					className={`mx-1 p-2 text-lg font-bold transition ease-in-out delay-150 hover:cursor-pointer hover:opacity-60 ${
						location.pathname === "/contact" ? "opacity-60" : ""
					}`}
					to="/contact"
				>
					Contact
				</Link>
			</li>
		</ul>
	);
}
