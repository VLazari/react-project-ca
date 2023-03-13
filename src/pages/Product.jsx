import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Loader from "../components/Loader";
import fetchAPI from "../hooks/fetchAPI";

export default function Product() {
	const { id } = useParams();
	const { data, isLoading, error } = fetchAPI(`https://api.noroff.dev/api/v1/online-shop/${id}`);

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}
	if (data)
		return (
			<div className="bg-white min-h-screen" style={{ minHeight: "calc(100vh - 160px)" }}>
				<div className="pt-6">
					<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
						<div className="aspect-w-4 aspect-h-5 rounded-lg">
							<img src={data[0].imageUrl} alt="Product image" className="h-full w-full object-cover object-center" />
						</div>
						<div className="m-3">
							<h2 className="sr-only">Product information</h2>
							<h1 className="m-4 text-2xl font-bold text-gray-900 sm:text-3xl">{data[0].title}</h1>
							<div className="my-3">
								<h3 className="sr-only">Reviews</h3>
								<div className="flex items-center">
									<div className="flex items-center">
										{[1, 2, 3, 4, 5].map((rating) =>
											data[0].rating >= rating ? (
												<FontAwesomeIcon className="mx-0.5 text-md text-gold-new" icon={faStar} />
											) : data[0].rating < rating && data[0].rating > rating - 1 ? (
												<FontAwesomeIcon className="mx-0.5 text-md text-gold-new" icon={faStarHalfStroke} />
											) : (
												<FontAwesomeIcon className="mx-0.5 text-md text-gray-200" icon={faStar} />
											)
										)}
									</div>
									<p className="ml-3 text-sm font-medium text-slate-900">{data[0].reviews.length} reviews</p>
								</div>
							</div>
							<div className="flex items-center my-3">
								{data[0].discount > 0 ? (
									<>
										<p className="mt-1 text-md line-through font-medium text-slate-400">{data[0].price}</p>
										<p className="mt-1 mx-2 text-lg font-medium text-red-new">{data[0].discountedPrice} NOK</p>
									</>
								) : (
									<p className="mt-1 text-lg font-medium text-slate-900">{data[0].discountedPrice} NOK</p>
								)}
							</div>
							<h3 className="sr-only">Description</h3>
							<p className="text-base text-gray-900">{data[0].description}</p>
							<button
								type="submit"
								className="mt-10 p-2 px-6 flex w-4/5 md:w-auto items-center justify-center rounded-md bg-gold-new py-3 mx-auto text-base font-medium text-slate-900 hover:font-bold"
							>
								Add to cart
							</button>
						</div>
					</div>
				</div>
				{data[0].reviews.length > 0 && (
					<div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
						<h3 className="font-bold">Recent reviews:</h3>
						<hr className="m-3" />
						{data[0].reviews.map((review) => (
							<div key={review.id}>
								<div className="flex flex-col align-middle lg:flex-row">
									<h6 className="mr-5 basis-1/5">{review.username}</h6>
									<div className="mr-5 basis-1/5">
										<h3 className="sr-only">Reviews</h3>
										<div className="flex items-center">
											{[1, 2, 3, 4, 5].map((rating) =>
												review.rating >= rating ? (
													<FontAwesomeIcon className="mx-0.5 text-md text-gold-new" icon={faStar} />
												) : (
													<FontAwesomeIcon className="mx-0.5 text-md text-gray-200" icon={faStar} />
												)
											)}
											<p className="ml-3 text-sm font-medium text-slate-900">({review.rating})</p>
										</div>
									</div>
									<p className="basis-3/5">{review.description}</p>
								</div>
								<hr className="m-3" />
							</div>
						))}
					</div>
				)}
			</div>
		);
}
