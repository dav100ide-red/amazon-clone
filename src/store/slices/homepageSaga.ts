import { call, put, takeEvery } from "redux-saga/effects";
import { homepageActions } from "./homepageSlice";
import { Product } from "@/types/product.type";

// Worker Saga: Handles fetching products
function* fetchProducts() {
    try {
        const response: Response = yield call(fetch, "/api/products?name=j&category=clothing");
        if (!response.ok) {
            yield put(homepageActions.fetchProductsFailure(`HTTP error! status: ${response.status}`));
            return;
        }

        const data: Product[] = yield call([response, "json"]);

        yield put(homepageActions.fetchProductsSuccess(data));
    } catch {
        // Dispatch action to handle errors
        yield put(homepageActions.fetchProductsFailure("Unknown error (static string defined in homepageSaga)"));
    }
}

function* watchFetchProducts() {
    yield takeEvery(homepageActions.fetchProductsStart.type, fetchProducts);
}

export const homepageWatchers = [...watchFetchProducts()];
