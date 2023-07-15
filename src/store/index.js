import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../slice/products'
import cartReducer from '../slice/cart'
import searchReducer from '../slice/search'

export default configureStore({
    reducer:{
        products: productsReducer,
        cart: cartReducer,
        search: searchReducer
    },
    devTools: true
})