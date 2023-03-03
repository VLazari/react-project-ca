import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<ul className="flex flex-row items-center">
			<li>
				<Link className="mx-1 p-2 text-lg font-bold" to="/">
					Home
				</Link>
			</li>
			<li>
				<Link className="mx-1 p-2 text-lg font-bold" to="/contact">
					Contact
				</Link>
			</li>
		</ul>
	);
}
