import { combineSlices, configureStore } from "@reduxjs/toolkit";
import homepageSlice, { HOMEPAGE_SLICE_NAME as HOMEPAGE } from "./slices/homepageSlice";
import cartSlice, { CART_SLICE_NAME as CART } from "./slices/cartSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const rootReducer = combineSlices({
    [HOMEPAGE]: homepageSlice,
    [CART]: cartSlice,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
