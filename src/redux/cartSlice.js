import { createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../utils/useLocalStorage";

const updateCartInfo = (state) => {
	state.inCartItems = state.cartProducts.reduce((total, product) => (total += product.quantity), 0);
	state.cartTotal = state.cartProducts.reduce((total, product) => (total += product.discountedPrice * product.quantity), 0).toFixed(2);
};

const initialState = getItem("cartState") || {
	cartProducts: [],
	inCartItems: 0,
	cartTotal: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const existingProductIndex = state.cartProducts.findIndex((product) => product.id === action.payload.id);
			existingProductIndex !== -1
				? state.cartProducts[existingProductIndex].quantity++
				: state.cartProducts.push({ ...action.payload, quantity: 1 });
			updateCartInfo(state);
			setItem("cartState", state);
		},
		decrementProduct: (state, action) => {
			const existingProductIndex = state.cartProducts.findIndex((product) => product.id === action.payload.id);
			if (existingProductIndex !== -1) {
				if (state.cartProducts[existingProductIndex].quantity > 1) {
					state.cartProducts[existingProductIndex].quantity--;
				} else {
					state.cartProducts.splice(existingProductIndex, 1);
				}
			}
			updateCartInfo(state);
			setItem("cartState", state);
		},
		removeProduct: (state, action) => {
			const existingProductIndex = state.cartProducts.findIndex((product) => product.id === action.payload.id);
			if (existingProductIndex !== -1) {
				state.cartProducts.splice(existingProductIndex, 1);
			}
			updateCartInfo(state);
			setItem("cartState", state);
		},
		clearCart: (state) => {
			state.cartProducts = [];
			state.inCartItems = 0;
			state.cartTotal = 0;
			setItem("cartState", state);
		},
	},
});

export const { addProduct, decrementProduct, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
