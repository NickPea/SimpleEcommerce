/**
 * root saga
 */

import { all } from "redux-saga/effects";

//sagas
import exampleSaga from "./example";

export default function* rootSaga() {
	yield all([exampleSaga]);
}
