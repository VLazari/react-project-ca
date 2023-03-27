import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
	return (
		<div className="text-slate-900">
			<div className="flex flex-col items-center justify-around bg-[url('/src/assets/success.jpg')] bg-center bg-cover min-h-fit w-full bg-img-cover py-40">
				<p className="backdrop-blur-sm z-10 text-xl font-bold mt-5">Thank you for your purchase</p>
				<Link to={"/"} className="backdrop-blur-sm p-3 my-20 z-10 border-2 bg shadow-md hoover:cursor-pointer hover:font-bold">
					{"<<"} Back to shop
				</Link>
			</div>
		</div>
	);
}
