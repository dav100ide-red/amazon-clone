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
            quantity: 2,
            id: 3,
            name: "Treadmill",
            price: 1200,
            category: "fitness",
            imgSrc: "https://webapi-prod.technogym.com/dw/image/v2/BFLQ_PRD/on/demandware.static/-/Sites-tg-catalog-master/default/dwfa987005/product/DCKA/technogym_myrun_gallery_001.jpg?sw=1840&sh=1380",
        },
        {
            quantity: 1,
            id: 4,
            name: "Running Shoes",
            price: 100,
            category: "fitness",
            imgSrc: "https://trere-uyn.b-cdn.net/products/images/ecomm_SX4_Y100311_A140_front.jpg-1200x1200.jpeg",
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

const getItemById = (state: RootState, id: number) => {
    const foundItem: CartItem | undefined = state[CART_SLICE_NAME].items.find((item) => item.id === id);
    return foundItem;
};

const getTotalPriceByQuantity = (state: RootState, id: number) => {
    const item = cartSelectors.getItemById(state, id);
    return item ? item.price * item.quantity : undefined;
};

export const cartSelectors = {
    getItems,
    getTotatlItemsQntity,
    getItemById,
    getTotalPriceByQuantity,
};

// export const cartActions = cartSlice.actions;
export const { name, actions: cartActions } = cartSlice;

export default cartSlice.reducer;
