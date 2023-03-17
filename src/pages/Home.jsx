import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Loader from "../components/Loader";
import fetchAPI from "../hooks/fetchAPI";
import { Link } from "react-router-dom";

export default function Home() {
	const { data, isLoading, error } = fetchAPI("https://api.noroff.dev/api/v1/online-shop");
	const [query, setQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		if (query === "") {
			setSearchResults([]);
		} else {
			const filteredResults = data.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
			setSearchResults(filteredResults);
		}
	}, [query, data]);

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}
	if (data)
		return (
			<div className="relative">
				<div className="flex flex-col justify-between items-center bg-[url('/src/assets/store.jpg')] bg-bottom bg-cover h-56 w-full bg-img-cover">
					<h1 className="text-slate-900 z-10 mt-10">Shop With Us</h1>
					<span className="relative flex flex-col items-center p-1 bg-slate-900 rounded-t-2xl z-10">
						<div className="rounded-full">
							<FontAwesomeIcon className="mx-2 text-xl text-white" icon={faMagnifyingGlass} />
							<input
								value={query}
								onChange={(event) => setQuery(event.target.value)}
								className="w-80 p-5 py-2 border rounded-full"
								type="text"
								placeholder="Search product..."
							/>
						</div>
						{query.length > 0 && (
							<ul className="absolute top-full left-0 w-full max-h-64 overflow-y-auto bg-slate-900 shadow-lg">
								{searchResults.map((product) => (
									<Link key={product.id} to={`/product/${product.id}`}>
										<li className="text-gray-100 py-2 px-4 cursor-pointer hover:bg-gray-300 hover:text-slate-900">
											{product.title}
										</li>
									</Link>
								))}
							</ul>
						)}
					</span>
				</div>
				<div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="sr-only">SHOP - Products</h2>
					<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{data.map((product) => (
							<Link key={product.id} to={`/product/${product.id}`} className="group p-1 bg-white hover:p-0 shadow-lg">
								<div className="relative aspect-w-7 aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
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
								<h3 className="mt-4 mx-2 text-md font-bold text-slate-900">{product.title}</h3>
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
			</div>
		);
}
