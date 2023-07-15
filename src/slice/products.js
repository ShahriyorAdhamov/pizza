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
        },
        getProductsSuccess(state, action) {
            state.isLoading = false;
            state.products = action.payload;
        },
        getArticlesFail: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload;
        },
    }
})

    export const {getProductsLoading, getProductsFail, getProductsSuccess } = productsSlice.actions;
    export default productsSlice.reducer;