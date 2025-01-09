import { Product, ProductsFilter } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const HOMEPAGE_SLICE_NAME = "homepage" as const;

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
        searchProductsStart: (state, action: PayloadAction<ProductsFilter>) => {
            state.loading = true;
            state.error = null;
        },
        loadProductsSuccess: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
            state.loading = false;
        },
        loadProductsFailed: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

// export const homepageActions = homepageSlice.actions;
export const { name, actions: homepageActions } = homepageSlice;

export default homepageSlice.reducer;
