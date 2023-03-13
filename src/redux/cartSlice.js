import { createSlice } from "@reduxjs/toolkit";

const updateCartInfo = (state) => {
	state.inCartItems = state.cartProducts.reduce((total, product) => (total += product.quantity), 0);
	state.cartTotal = state.cartProducts.reduce((total, product) => total + product.discountedPrice * product.quantity, 0);
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartProducts: [],
		inCartItems: 0,
		cartTotal: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			const existingProductIndex = state.cartProducts.findIndex((product) => product.id === action.payload.id);
			existingProductIndex !== -1
				? state.cartProducts[existingProductIndex].quantity++
				: state.cartProducts.push({ ...action.payload, quantity: 1 });
			updateCartInfo(state);
		},
		removeProduct: (state, action) => {
			const existingProductIndex = state.cartProducts.findIndex((product) => product.id === action.payload.id);
			if (existingProductIndex !== -1) {
				if (state.cartProducts[existingProductIndex].quantity > 1) {
					state.cartProducts[existingProductIndex].quantity--;
				} else {
					state.cartProducts.splice(existingProductIndex, 1);
				}
			}
			updateCartInfo(state);
		},
		clearCart: (state) => {
			state.cartProducts = [];
			state.inCartItems = 0;
			state.cartTotal = 0;
		},
	},
});
