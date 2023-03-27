import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct, decrementProduct, clearCart } from "../redux/cartSlice";

export default function Checkout() {
	const cartProducts = useSelector((state) => state.cart.cartProducts);
	const inCartItems = useSelector((state) => state.cart.inCartItems);
	const cartTotal = useSelector((state) => state.cart.cartTotal);
	const dispatch = useDispatch();

	return (
		<div className="bg-white max-w-7xl mx-auto px-1 text-slate-900">
			<h1 className="text-center text-3xl md:text-6xl py-5 md:py-9">Shopping Cart</h1>
			<hr className="mx-2" />
			{inCartItems === 0 ? (
				<h2 className="text-center text-2xl md:text-3xl font-bold">Is Empty</h2>
			) : (
				<>
					{cartProducts.map((product) => (
						<div className="m-1 text-md md:text-xl max-w-prose md:min-w-full" key={product.id}>
							<div className="my-2 md:my-4 grid grid-cols-12 grid-rows-2 gap-1 md:gap-10 content-between max-h-40">
								<div className="col-span-3 row-span-2 relative aspect-w-7 aspect-h-8 w-full overflow-hidden rounded-lg my-1 mx-1 md:mx-6">
									<img src={product.imageUrl} alt="image" className="max-h-40 w-36 object-cover object-center" />
								</div>
								<h3 className="font-bold col-span-6 p-2 mx-auto md:mx-0">{product.title}</h3>
								<p className="col-span-3 p-2">$ {(product.discountedPrice * product.quantity).toFixed(2)}</p>
								<div className="col-span-6 mx-auto md:mx-0">
									<span className="text-gray-400 select-none mr-5 hidden md:inline-block">Qty</span>
									<span
										onClick={() => dispatch(decrementProduct(product))}
										className="select-none py-2 px-3 border-2 border-slate-200 rounded-lg shadow-md transition ease-in-out delay-150 hover:cursor-pointer hover:border-slate-300 hover:text-lg"
									>
										-
									</span>
									<span className="mx-3 select-none">{product.quantity}</span>
									<span
										onClick={() => dispatch(addProduct(product))}
										className="select-none py-2 px-3 border-2 border-slate-200 rounded-lg shadow-md transition ease-in-out delay-150 hover:cursor-pointer hover:border-slate-300 hover:text-lg"
									>
										+
									</span>
								</div>
								<div className="col-span-3">
									<span
										onClick={() => dispatch(removeProduct(product))}
										className="p-3 cursor-pointer underline underline-offset-2 text-red-new"
									>
										Remove
									</span>
								</div>
							</div>
							<hr className="mx-2" />
						</div>
					))}
					<div className="flex justify-around align-middle items-center h-20 md:h-40 text-slate-900 font-bold">
						<p className="text-xl md:text-2xl">Total:</p>
						<p className="text-lg md:text-xl">$ {cartTotal}</p>
					</div>
					<Link
						to={"/success"}
						onClick={() => dispatch(clearCart())}
						className="shadow-md my-10 mx-auto p-2 px-6 w-full md:w-10/12 flex items-center justify-center rounded-md bg-gold-new py-3 text-base font-medium text-slate-900 hover:font-bold"
					>
						Checkout
					</Link>
				</>
			)}
		</div>
	);
}
