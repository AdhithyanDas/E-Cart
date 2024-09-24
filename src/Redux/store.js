import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice";
import wishSlice from "./Slice/wishSlice";
import cartSlice from "./Slice/cartSlice";

const productStore = configureStore({
    reducer: {
        productReducer: productSlice,
        wishReducer: wishSlice,
        cartReducer: cartSlice
    }
})

export default productStore