//

import { take, call, put, all } from "redux-saga/effects";
import axios from "axios";

function* handleItemPageData() {
	while (true) {
		const action = yield take("DATA/ITEM-PAGE/PRODUCT/FETCH");
		const productTitle = action.payload;
		const productData = yield call(getSingleProductData, productTitle);
		yield put({ type: "DATA/ITEM-PAGE/PRODUCT/FETCHED", payload: productData });
	}
}

export default function* () {
	yield all([handleItemPageData()]);
}

//helpers
async function getSingleProductData(productTitle: string) {
	return await axios
		.get(`/api/item-page/product/${productTitle}`)
		.then((res) => res.data);
}
