import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchTxtProducts: [],
    searchTxt:''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchTxtContainer(state, action) {
            state.searchTxtProducts = action.payload;
        },
        searchTxtFunc(state, action) {
            state.searchTxt = action.payload
        }
    }
})


export const {searchTxtContainer, searchTxtFunc} = searchSlice.actions;
export default searchSlice.reducer;