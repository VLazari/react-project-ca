import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faXmark, faComment } from "@fortawesome/free-solid-svg-icons";

export default function MobileMenu() {
	const [menuSwitch, setMenuSwitch] = useState("hidden");
	const location = useLocation();

	const toggleMenu = () => {
		setMenuSwitch(menuSwitch === "hidden" ? "" : "hidden");
	};

	const transitionStyles = menuSwitch === "hidden" ? "max-w-[55px] opacity-70" : "max-w-[350px] opacity-90";
	const menuIcon = menuSwitch === "hidden" ? faBars : faXmark;

	return (
		<div
			className={`flex justify-center sticky bottom-1 mx-auto py-4 z-20 sm:hidden bg-slate-900 backdrop-opacity-10 text-white rounded-full overflow-hidden transition-all duration-[0.6s] ease-in-out ${transitionStyles}`}
		>
			<Link className="rounded-md mr-8 px-6" to="/">
				<FontAwesomeIcon className={`text-2xl ${location.pathname === "/" ? "opacity-60" : ""}`} icon={faHouse} />
			</Link>

			<FontAwesomeIcon className={`text-2xl ${menuSwitch === "hidden" ? "text-white" : "text-red-new"}`} icon={menuIcon} onClick={toggleMenu} />

			<Link className="ml-8 px-6" to="/contact">
				<FontAwesomeIcon className={`text-2xl ${location.pathname === "/contact" ? "opacity-60" : ""}`} icon={faComment} />
			</Link>
		</div>
	);
}
