import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
    products: []
}

export const productsSlice = createSlice({
    name:'products', 
    initialState,
    reducers: {
        getProductsLoading (state) {
            state.isLoading = true;
            state.products = []
        },
        getProductsSuccess(state, action) {
            state.isLoading = false;
            state.products = action.payload;
        },
        getProductsFail: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload;
            state.products = []
        },
    }
})

    export const {getProductsLoading, getProductsFail, getProductsSuccess } = productsSlice.actions;
    export default productsSlice.reducer;