/**
 * root saga
 * (see 'root saga patterns' in documentation for explanation)
 */

import { all, spawn, call } from "redux-saga/effects";

//sagas
import appInitSaga from './app-init'

function* rootSaga() {
	const sagas = [appInitSaga];

	yield all(
		sagas.map((saga) =>
			spawn(function* () {
				while (true) {
					try {
						yield call(saga);
						break;
					} catch (e) {
						console.log(e);
					}
				}
			}),
		),
	);
}

export default rootSaga;
