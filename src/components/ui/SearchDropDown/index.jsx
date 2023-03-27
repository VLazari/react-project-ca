import React from "react";
import { Link } from "react-router-dom";

export default function SearchDropDown(props) {
	return (
		<ul className="absolute top-full left-0 w-full max-h-64 overflow-y-auto bg-slate-900 shadow-lg">
			{props.searchResults.map((product) => (
				<Link key={product.id} to={`/product/${product.id}`}>
					<li className="text-gray-100 py-2 px-4 cursor-pointer hover:bg-gray-300 hover:text-slate-900">{product.title}</li>
				</Link>
			))}
		</ul>
	);
}
