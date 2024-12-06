import { Product } from "@/types/product.type";
import { createSlice } from "@reduxjs/toolkit";

export interface ProductsState {
    products: Product[];
    randomBool: boolean;
}

const initialState: ProductsState = {
    products: [],
    randomBool: true,
};

export const PRODUCTS_SLICE_NAME = "products" as const;

export const productsSlice = createSlice({
    name: PRODUCTS_SLICE_NAME,
    initialState,
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        removeLastProduct: (state) => {
            state.products.pop();
        },
    },
});

// Action creators are generated for each case reducer function
export const { removeLastProduct } = productsSlice.actions;

export default productsSlice.reducer;
