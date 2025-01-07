import { CartItem } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const CART_SLICE_NAME = "cart" as const;

type CartState = {
    items: CartItem[];
};
const initialState: CartState = {
    items: [
        {
            id: 10,
            name: "Keyboard",
            price: 80,
            category: "gaming",
            imgSrc: "https://placehold.co/150x150/ADD8E6/000000.png?text=Keyboard",
            quantity: 2,
        },
        {
            id: 92,
            name: "Protein",
            price: 35.99,
            category: "fitness",
            imgSrc: "https://placehold.co/150x150/ADD8E6/000000.png?text=Protein",
            quantity: 1,
        },
    ],
};

const cartSlice = createSlice({
    name: CART_SLICE_NAME,
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const existingItem: CartItem | null = state.items.find((item) => item.id === action.payload.id) ?? null;
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
                return;
            }
            state.items.push(action.payload);
        },
    },
});

const getItems = (state: RootState) => state[CART_SLICE_NAME].items;
const getTotatlItemsQntity = (state: RootState) =>
    state[CART_SLICE_NAME].items.reduce((acc, item: CartItem) => acc + item.quantity, 0);

export const cartSelectors = {
    getItems,
    getTotatlItemsQntity,
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
