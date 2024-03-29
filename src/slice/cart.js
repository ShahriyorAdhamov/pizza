import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getCartProductsSuccess(state, action) {
            state.cartProducts = action.payload
        },
        addQuantity(state, action) {
            const cartProduct = state.cartProducts.find(item => item.id === action.payload)
            cartProduct.quantity++;
            localStorage.setItem('cart', JSON.stringify(state.cartProducts))
        },
        subQuantity(state, action) {
            const cartProduct = state.cartProducts.find(item => item.id === action.payload)
            const index = state.cartProducts.indexOf(cartProduct)
            if(cartProduct.quantity > 1) {
                cartProduct.quantity--;
                localStorage.setItem('cart', JSON.stringify(state.cartProducts))
            }else {
                state.cartProducts.splice(index, 1)
                localStorage.setItem('cart', JSON.stringify(state.cartProducts))
            }
        }

    }
})

export const {getCartProductsSuccess, addQuantity, subQuantity} = cartSlice.actions;
export default cartSlice.reducer;