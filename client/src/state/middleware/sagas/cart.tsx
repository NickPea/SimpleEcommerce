//

import { take, call, put, all, select } from "redux-saga/effects";

function* handleAddToCart() {
	while (true) {
		const action = yield take("APP/CART/ADD");

		const cart = yield select((state) => state.app.cart);
		const isItemAlreadyInCart = cart.some(
			(previousPayload) => previousPayload.item.id === action.payload.item.id,
		);

		if (isItemAlreadyInCart) {
			yield put({
				type: "APP/NOTIFICATIONS/ADD",
				payload: {
					message: `You've already added ${action.payload.item.title} to your cart`,
					action: { title: "show cart", dispatch: { type: "UI/CART/OPEN" } },
				},
			});
		} else {
			yield put({ type: "APP/CART/ADD/APPROVED", payload: action.payload });
			yield put({
				type: "APP/NOTIFICATIONS/ADD",
				payload: {
					message: `${action.payload.item.title} added to cart`,
					action: { title: "show cart", dispatch: { type: "UI/CART/OPEN" } },
				},
			});
		}
	}
}
function* handleAddToCartAndCheckout() {
	while (true) {
		const action = yield take("APP/CART/ADD-&-CHECKOUT");
		const cart = yield select((state) => state.app.cart);
		const isItemAlreadyInCart = cart.some(
			(previousPayload) => previousPayload.item.id === action.payload.item.id,
		);
		if (!isItemAlreadyInCart) {
			yield put({ type: "APP/CART/ADD/APPROVED", payload: action.payload });
		}
		yield call(redirect, '/checkout')
	}
}

export default function* () {
	yield all([handleAddToCart(), handleAddToCartAndCheckout()]);
}

//helpers
function redirect(path:string) {
	window.location.href = path;
}