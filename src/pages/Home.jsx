import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Loader from "../components/Loader";
import fetchAPI from "../hooks/fetchAPI";
import ProductCard from "../components/ui/ProductCard";

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
				<div className="flex flex-col justify-between items-center bg-[url('/src/assets/store.jpg')] bg-bottom bg-cover h-50 sm:h-56 w-full bg-img-cover">
					<h1 className="text-slate-900 z-10 my-5 sm:mt-10 text-2xl sm:text-6xl backdrop-blur-[2px]">Shop With Us</h1>
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
				<ProductCard products={[...data]} />
			</div>
		);
}
