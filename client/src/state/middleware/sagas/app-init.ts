//

import { take, put, call } from "redux-saga/effects";
import axios from "axios";

export default function* async() {
	//
	while (true) {
		//
		yield take("APP/INIT");

		//landing
		const landingPageFeaturedData = yield call(getLandingPageFeaturedData);
		yield put({
			type: "DATA/LANDING-PAGE/FEATURED/INIT",
			payload: landingPageFeaturedData,
		});

		//store
		const storePageCategoryData = yield call(getStorePageCategoryData);
		yield put({
			type: "DATA/STORE-PAGE/CATEGORY/INIT",
			payload: storePageCategoryData,
		});

		const storePageDisplayData = yield call(getStorePageDisplayData);
		yield put({
			type: "DATA/STORE-PAGE/DISPLAY/INIT",
			payload: storePageDisplayData,
		});
	}
}
const getLandingPageFeaturedData = async () => {
	return await axios
		.get("/api/landing-page/featured/init")
		.then((res) => res.data);
};
const getStorePageCategoryData = async () => {
	return await axios.get("/api/store-page/categories").then((res) => res.data);
};
const getStorePageDisplayData = async () => {
	return await axios
		.get("/api/store-page/products/first-category")
		.then((res) => res.data);
};
