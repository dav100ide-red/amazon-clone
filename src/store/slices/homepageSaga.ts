import { call, put, takeEvery } from "redux-saga/effects";
import { homepageActions } from "./homepageSlice";
import { Product, ProductsFilter } from "@/types/product.type";
import qs from "qs";

// Worker Saga: Handles fetching products
function* fetchProducts() {
    try {
        const response: Response = yield call(fetch, "/api/products");
        if (!response.ok) {
            yield put(homepageActions.loadProductsFailed(`HTTP error! status: ${response.status}`));
            return;
        }

        const data: Product[] = yield call([response, "json"]);

        yield put(homepageActions.loadProductsSuccess(data));
    } catch {
        // Dispatch action to handle errors
        yield put(homepageActions.loadProductsFailed("Unknown error (static string defined in homepageSaga)"));
    }
}

function* searchProducts(action: { payload: ProductsFilter }) {
    try {
        // Construct query parameters
        const query = qs.stringify(action.payload, { skipNulls: true });
        const url = `/api/products?${query}`;

        // Fetch data
        const response: Response = yield call(fetch, url);
        if (!response.ok) {
            yield put(homepageActions.loadProductsFailed(`HTTP error! status: ${response.status}`));
            return;
        }

        const data: Product[] = yield call([response, "json"]);

        // Dispatch success action
        yield put(homepageActions.loadProductsSuccess(data));
    } catch {
        yield put(homepageActions.loadProductsFailed("Unknown error (static string defined in homepageSaga)"));
    }
}

function* watchFetchProducts() {
    yield takeEvery(homepageActions.fetchProductsStart, fetchProducts);
}

function* watchSearchProducts() {
    yield takeEvery(homepageActions.searchProductsStart, searchProducts);
}

export const homepageWatchers = [...watchFetchProducts(), ...watchSearchProducts()];
