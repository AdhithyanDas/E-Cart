import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishListSlice = createSlice({
    name: 'wishList',
    initialState: {
        items: []
    },
    reducers: {
        addToWishList(state, action) {
            const existing = state.items.find(item => item.id == action.payload.id)
            if (existing) {
                toast.warning("Product Already Added to WishList")
            } else {
                state.items.push(action.payload)
                toast.success("Product Added to WishList")
            }
        },
        removeFromWishList(state, action) {
            state.items = state.items.filter(item => item.id != action.payload)
        }
    }
})

export default wishListSlice.reducer
export const { addToWishList, removeFromWishList } = wishListSlice.actions