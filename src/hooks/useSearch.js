import { useState, useEffect } from "react";

export default function useSearch(data) {
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

	return { query, setQuery, searchResults };
}
