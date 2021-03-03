//

import { take, put, call } from "redux-saga/effects";
import axios from "axios";

export default function* async() {
	//
	while (true) {
		//
		yield take("APP/INIT");

		const data = yield call(getLandingPageData);
		yield put({ type: "DATA/LANDING-PAGE/FEATURED/LOAD", payload: data });
	}
}

const getLandingPageData = async () => {
	return await axios.get("/api/landing-page/featured").then((res) => res.data);
};
