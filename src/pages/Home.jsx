import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react"; //test

export default function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("https://api.noroff.dev/api/v1/online-shop");
				const json = await response.json();
				setProducts(json);
			} catch (error) {
				console.error(error);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div>
			<div className="flex flex-col justify-center items-center bg-[url('/src/assets/store.jpg')] bg-bottom bg-cover h-56 w-full bg-img-cover">
				<h1 className=" text-slate-900 z-10">Shop With Us</h1>
				<span className="flex items-center p-3 bg-slate-900 rounded-full z-10">
					<FontAwesomeIcon className="mx-2 text-xl text-white" icon={faMagnifyingGlass} />
					<input className="w-80 p-5 py-2 border rounded-full" type="text" placeholder="Search product..." />
				</span>
			</div>

			<div className="">
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="sr-only">SHOP - Products</h2>

					<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{products.map((product) => (
							<a key={product.id} href={product.href} className="group p-1 bg-white">
								<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
									<img
										src={product.imageUrl}
										alt={product.title}
										className="h-full w-full object-cover object-center group-hover:opacity-75"
									/>
								</div>
								<h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
								<p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
