import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartIcon() {
	const inCartItems = useSelector((state) => state.cart.inCartItems);

	return (
		<div>
			<FontAwesomeIcon className="p-6 pt-10 pb-2 text-xl" icon={faCartShopping} />
			<div className="relative flex items-center justify-center bottom-6 left-10 z-1 text-white bg-red-new rounded-full h-6 w-6">
				<p className="font-bold text-sm text-white">{inCartItems}</p>
			</div>
		</div>
	);
}
