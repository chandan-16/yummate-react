import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItems : (state, action) => {
            const updatedCartList = state.items.push(action.payload);
            return {...state, items : updatedCartList }
        },
        removeItem : (state, action) => {
            const updatedCartList = state.items.pop(action.payload);
            return { ...state, items : updatedCartList }
        },
        clearCart : (state) => {
            const updatedCartList = state.items.length = 0;
        }
    } 
});

export const { addItems, removeItem, updatedCartList } = cartSlice.actions;

export default cartSlice.reducer;

