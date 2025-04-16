import { CartItem } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const CART_SLICE_NAME = "cart" as const;

type CartState = {
    items: CartItem[];
};
const initialState: CartState = {
    items: [
        {
            quantity: 1,
            id: 4,
            name: "Running Shoes",
            price: 100,
            category: "fitness",
            imgSrc: "https://trere-uyn.b-cdn.net/products/images/ecomm_SX4_Y100311_A140_front.jpg-1200x1200.jpeg",
        },
        {
            quantity: 5,
            id: 13,
            name: "Yoga Mat",
            price: 40,
            category: "fitness",
            imgSrc: "https://placehold.co/150x150/98FB98/000000.png?text=Yoga+Mat",
        },
    ],
};

const cartSlice = createSlice({
    name: CART_SLICE_NAME,
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const item: CartItem | null = state.items.find((item) => item.id === action.payload.id) ?? null;
            if (item) {
                item.quantity = action.payload.quantity;
                return;
            }
            state.items.push(action.payload);
        },
        setItemQntity(state, action: PayloadAction<CartItem>) {
            const item: CartItem | null = state.items.find((item) => item.id === action.payload.id) ?? null;
            if (!item) {
                console.warn(`No item :( in setItemQntity reducer`);
                return;
            }
            item.quantity = action.payload.quantity;
        },
        removeItemFromCart(state, action: PayloadAction<CartItem>) {
            const item: CartItem | null = state.items.find((item) => item.id === action.payload.id) ?? null;
            if (!item) {
                console.warn(`No item :( in removeItemFromCart reducer`);
                return;
            }
            const newItems = state.items.filter((item) => item.id !== action.payload.id);
            state.items = newItems;
        },
    },
});

// ! usa createSelector che crea i selector di tipo memozoid
const getItems = (state: RootState) => state[CART_SLICE_NAME].items;
const getTotatlItemsQntity = (state: RootState) =>
    state[CART_SLICE_NAME].items.reduce((acc, item: CartItem) => acc + item.quantity, 0);

const getItemById = (state: RootState, id: number): CartItem | undefined =>
    state[CART_SLICE_NAME].items.find((item) => item.id === id);

const getTotalPriceById = (state: RootState, id: number) => {
    const item = cartSelectors.getItemById(state, id);
    return item ? item.price * item.quantity : undefined;
};

const getCartTotalPrice = (state: RootState) =>
    state[CART_SLICE_NAME].items.reduce((acc, item) => acc + item.quantity * item.price, 0);

export const cartSelectors = {
    getItems,
    getTotatlItemsQntity,
    getItemById,
    getTotalPriceById,
    getCartTotalPrice,
};

// export const cartActions = cartSlice.actions;
export const { name, actions: cartActions } = cartSlice;

export default cartSlice.reducer;
