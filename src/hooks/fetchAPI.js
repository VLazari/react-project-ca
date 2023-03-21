import { useState, useEffect } from "react";
import calculateDiscounts from "../utils/calcDiscount";

export default function fetchAPI(url) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(true);

	useEffect(() => {
		async function getData() {
			try {
				setError(false);
				setIsLoading(true);
				const response = await fetch(url);
				const json = await response.json();
				// Add discount amount to the products array
				const productsWithDiscounts = calculateDiscounts(json);
				setData(productsWithDiscounts);
			} catch (error) {
				console.log(error);
				setIsLoading(false);
				setError(true);
			} finally {
				setIsLoading(false);
			}
		}
		getData();
	}, [url]);
	return { data, isLoading, error };
}
