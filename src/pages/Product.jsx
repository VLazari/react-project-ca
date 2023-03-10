import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";

const product = {
	name: "Basic Tee 6-Pack",
	price: "$192",
	href: "#",
	images: [
		{
			src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
			alt: "Two each of gray, white, and black shirts laying flat.",
		},
		{
			src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
			alt: "Model wearing plain black basic tee.",
		},
		{
			src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
			alt: "Model wearing plain gray basic tee.",
		},
		{
			src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
			alt: "Model wearing plain white basic tee.",
		},
	],

	description:
		'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
	highlights: ["Hand cut and sewn locally", "Dyed with our proprietary colors", "Pre-washed & pre-shrunk", "Ultra-soft 100% cotton"],
	details:
		'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Product() {
	return (
		<div className="bg-white">
			<div className="pt-6">
				{/* Image gallery */}
				<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
					<div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
						<img src={product.images[3].src} alt={product.images[3].alt} className="h-full w-full object-cover object-center" />
					</div>
				</div>

				{/* Product info */}
				<div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
					<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
					</div>

					{/* Options */}
					<div className="mt-4 lg:row-span-3 lg:mt-0">
						<h2 className="sr-only">Product information</h2>
						<p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

						{/* Reviews */}
						<div className="mt-6">
							<h3 className="sr-only">Reviews</h3>
							<div className="flex items-center">
								<div className="flex items-center">
									{[0, 1, 2, 3, 4].map((rating) => (
										<StarIcon
											key={rating}
											className={classNames(
												reviews.average > rating ? "text-gray-900" : "text-gray-200",
												"h-5 w-5 flex-shrink-0"
											)}
											aria-hidden="true"
										/>
									))}
								</div>
								<p className="sr-only">{reviews.average} out of 5 stars</p>
								<p className="ml-3 text-sm font-medium text-slate-900">{reviews.totalCount} reviews</p>
							</div>
						</div>
						<button
							type="submit"
							className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gold-new py-3 px-8 text-base font-medium text-slate-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Add to cart
						</button>
					</div>

					<div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
						{/* Description and details */}
						<div>
							<h3 className="sr-only">Description</h3>

							<div className="space-y-6">
								<p className="text-base text-gray-900">{product.description}</p>
							</div>
						</div>

						<div className="mt-10">
							<h3 className="text-sm font-medium text-gray-900">Highlights</h3>

							<div className="mt-4">
								<ul role="list" className="list-disc space-y-2 pl-4 text-sm">
									{product.highlights.map((highlight) => (
										<li key={highlight} className="text-gray-400">
											<span className="text-gray-600">{highlight}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="mt-10">
							<h2 className="text-sm font-medium text-gray-900">Details</h2>

							<div className="mt-4 space-y-6">
								<p className="text-sm text-gray-600">{product.details}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
