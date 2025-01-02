import { CartItem } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const CART_SLICE_NAME = "cart" as const;

type CartState = {
    items: CartItem[];
};
const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: CART_SLICE_NAME,
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            state.items.push(action.payload);
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
