import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartIcon() {
	return (
		<div>
			<FontAwesomeIcon className="p-6 text-xl" icon={faCartShopping} />
			<div className="relative flex items-center justify-center bottom-9 left-10 z-1 text-white bg-red-new rounded-full h-5 w-5">
				<p className="font-bold text-slate-900">4</p>
			</div>
		</div>
	);
}
