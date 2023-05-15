import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // payload: {product: {}, quantity: number}
    addToCart: (state, action) => {
      // Check if we already have the product and then increment the quantity, if not then add to cart
      const index = state.cartItems.findIndex(
        (item) => item.productId === action.payload.product._id
      );

      if (index >= 0) {
        state.cartItems[index].quantity += action.payload.quantity;
      } else {
        state.cartItems.push({
          productId: action.payload.product._id,
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },

    // Takes in a id (payload)
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.productId !== action.payload
      );
    },

    // Takes in a id (payload)
    increment: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.productId === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },

    // Takes in a id (payload)
    decrement: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.productId === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    },
  },
});

export const { addToCart, removeItemFromCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
