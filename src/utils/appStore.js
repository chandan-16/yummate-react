import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";

const appStore = configureStore({
    reducer : {
        cartState : cartReducer
    }
});

export default appStore;