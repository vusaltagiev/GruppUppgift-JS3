import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:7000/api/products";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      // payload is the return of the fetch
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.error = "";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
