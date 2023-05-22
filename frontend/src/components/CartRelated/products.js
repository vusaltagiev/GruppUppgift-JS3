import {createAsyncThunk} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    products: [],
    isLoading: false,
    error: ""
};

export const getProducts = createAsyncThunk("getProducts", async () => {
    const res = await fetch('http://localhost:7000/api/products');
    const data = await res.json();
    return data;
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        
          .addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        }).addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.error = "";
        }).addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

export default productsSlice.reducer;

