import { all } from "redux-saga/effects";
import { homepageWatchers } from "./slices/homepageSaga";

export default function* rootSaga() {
    yield all([...homepageWatchers]);
}
