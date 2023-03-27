import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Loader from "../components/Loader";
import fetchAPI from "../hooks/fetchAPI";
import useSearch from "../hooks/useSearch";
import ProductCard from "../components/ui/ProductCard";
import SearchDropDown from "../components/ui/SearchDropDown";

export default function Home() {
	const { data, isLoading, error } = fetchAPI("https://api.noroff.dev/api/v1/online-shop");
	const { query, setQuery, searchResults } = useSearch(data);

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}
	return (
		<div className="relative">
			<div className="flex flex-col justify-between items-center bg-[url('/src/assets/store.jpg')] bg-bottom bg-cover h-50 sm:h-56 w-full bg-img-cover">
				<h1 className="text-slate-900 z-10 my-5 sm:mt-10 text-2xl sm:text-6xl backdrop-blur-[2px]">Shop With Us</h1>
				<span className="relative flex flex-col items-center p-1 bg-slate-900 rounded-t-2xl z-10">
					<div className="flex items-center rounded-full">
						<FontAwesomeIcon className="mx-2 text-xl text-white" icon={faMagnifyingGlass} />
						<input
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							className="w-80 p-5 py-2 border rounded-full"
							type="text"
							placeholder="Search product..."
						/>
					</div>
					{query.length > 0 && <SearchDropDown searchResults={searchResults} />}
				</span>
			</div>
			<ProductCard products={[...data]} />
		</div>
	);
}
