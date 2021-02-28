//

import { put } from "redux-saga/effects";

export default function* testSaga() {
	yield put({ type: "example/message"});
}
