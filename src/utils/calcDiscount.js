/**
 * Calculate the discount price in percentage and add the value discount to each object of the array.
 * @param {Array} products
 * @returns New array of objects with added discount field
 */
export default function calculateDiscounts(products) {
	const productsArray = Array.isArray(products) ? products : [products];

	return productsArray.map((product) => {
		const price = product.price;
		const discountedPrice = product.discountedPrice;
		const difference = price - discountedPrice;
		const discountPercentage = difference > 0 ? (difference / price) * 100 : 0;
		const discount = Math.floor(discountPercentage);
		return { ...product, discount };
	});
}
