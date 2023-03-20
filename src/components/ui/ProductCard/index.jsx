import React from "react";
import { Link } from "react-router-dom";
import StarAverageRating from "../StarAverageRating";

export default function ProductCard(props) {
	return (
		<div className="mx-auto max-w-xs sm:max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<h2 className="sr-only">SHOP - Products</h2>
			<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
				{props.products.map((product) => (
					<Link key={product.id} to={`/product/${product.id}`} className="group p-1 bg-white hover:p-0 shadow-lg">
						<div className="relative aspect-w-10 aspect-h-11 w-full overflow-hidden rounded-lg bg-gray-200">
							{product.discount > 0 && (
								<div className="absolute border-2 border-white left-5 top-5 flex justify-center items-center h-8 w-14 bg-red-new z-10 rounded-full">
									<p className="text-md font-medium text-white">-{product.discount}%</p>
								</div>
							)}
							<img
								src={product.imageUrl}
								alt={product.title}
								className="h-full w-full object-cover object-center group-hover:opacity-75"
							/>
						</div>
						<h3 className="my-2 mx-2 text-md sm:text-lg font-bold text-slate-900">{product.title}</h3>
						<StarAverageRating rating={product.rating} />
						<div className="flex items-center">
							{product.discount > 0 ? (
								<>
									<p className="my-2 mx-3 text-md line-through font-medium text-slate-400">{product.price}</p>
									<p className="my-2 text-lg font-medium text-red-new">{product.discountedPrice} NOK</p>
								</>
							) : (
								<p className="my-2 mx-3 text-lg font-medium text-slate-900">{product.discountedPrice} NOK</p>
							)}
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
