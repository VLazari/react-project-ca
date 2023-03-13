import { useState, useEffect } from "react";
import calculateDiscounts from "../utils/calcDiscount";

export default function fetchAPI(url) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function getData() {
			try {
				setError(false);
				setIsLoading(true);
				const response = await fetch(url);
				const json = await response.json();
				// Add discount to the products array
				const productsWithDiscounts = calculateDiscounts(json);
				setData(productsWithDiscounts);
				setIsLoading(false);
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
