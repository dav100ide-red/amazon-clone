import { Product } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const HOMEPAGE_SLICE_NAME = "homepage" as const;

type HomepageState = {
    products: Product[];
    loading: boolean;
    error: string | null;
};
const initialState: HomepageState = {
    products: [],
    loading: false,
    error: null,
};

const homepageSlice = createSlice({
    name: HOMEPAGE_SLICE_NAME,
    initialState,
    reducers: {
        fetchProductsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
            state.loading = false;
        },
        fetchProductsFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const homepageActions = homepageSlice.actions;

export default homepageSlice.reducer;
