//

import { take, call, put, all } from "redux-saga/effects";
import axios from "axios";


function* handleCategoryDispalyData() {
	while (true) {
		const action = yield take("DATA/STORE-PAGE/DISPLAY/CATEGORY-FETCH");
		const displayData = yield call(getCategoryDisplayData, action.payload);
		yield put({
			type: "DATA/STORE-PAGE/DISPLAY/FETCHED",
			payload: displayData,
		});
	}
}

function* handlePriceDispalyData() {
	while (true) {
		const action = yield take("DATA/STORE-PAGE/DISPLAY/PRICE-FETCH");
		const displayData = yield call(getPriceDisplayData, action.payload);
		yield put({
			type: "DATA/STORE-PAGE/DISPLAY/FETCHED",
			payload: displayData,
		});
	}
}

export default function* () {
	yield all([handleCategoryDispalyData(), handlePriceDispalyData()]);
}


//helpers
async function getCategoryDisplayData(urlParam: string) {
	return await axios
		.get(`api/store-page/products/category/${urlParam}`)
		.then((res) => res.data);
}
async function getPriceDisplayData(urlParam: string) {
	return await axios
		.get(`api/store-page/products/price/${urlParam}`)
		.then((res) => res.data);
}