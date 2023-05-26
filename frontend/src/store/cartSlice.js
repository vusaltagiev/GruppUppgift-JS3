import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.productId === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
    },

    decrement: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.productId === action.payload && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
    },

    addToCart: (state, action) => {
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

    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.productId !== action.payload
      );
    },

    resetCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  increment,
  decrement,
  addToCart,
  removeItemFromCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
