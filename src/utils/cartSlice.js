import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cartList : [],
        total :0,
    },
    reducers : {
        add(state, action){
            const updatedCartList = state.cartList.concat(action.payload);
            // console.log("total value", Number(action.payload.price))
            const total = Number(action.payload.price) + state.total;
         
            return { ...state, total : total,  cartList : updatedCartList }
        },
        remove(state, action){
            console.log("action ----->", action)
            const updatedCartList = state.cartList.filter(item => item.id !== action.payload.id);
            const total = Number(action.payload.price) - state.total;
            return { ...state, total : total,  cartList : updatedCartList }
        }
    }
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

