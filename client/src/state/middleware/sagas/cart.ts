//

import { take, call, put, all, select } from "redux-saga/effects";

function* handleCartItemAdd() {
	while (true) {
		const action = yield take("APP/CART/ITEMS/ADD/START");

		const cartItems = yield select((state) => state.app.cart.items);
		const isItemAlreadyInCart = cartItems.some(
			(previousPayload) =>
				previousPayload.product.id === action.payload.product.id,
		);

		if (!isItemAlreadyInCart) {
			yield put({
				type: "APP/CART/ITEMS/ADD/FINISH",
				payload: action.payload,
			});
			yield put({
				type: "APP/NOTIFICATIONS/ADD",
				payload: {
					message: `${action.payload.product.title} added to cart`,
					action: { title: "show cart", dispatch: { type: "UI/CART/OPEN" } },
				},
			});
			yield put({
				type: "APP/CART/TOTAL/CALCULATE",
			});
		} else {
			yield put({
				type: "APP/NOTIFICATIONS/ADD",
				payload: {
					message: `You've already added ${action.payload.product.title} to your cart`,
					action: { title: "show cart", dispatch: { type: "UI/CART/OPEN" } },
				},
			});
		}
	}
}
function* handleCartItemAddAndCheckout() {
	while (true) {
		const action = yield take("APP/CART/ITEMS/ADD-&-CHECKOUT/START");
		const cartItems = yield select((state) => state.app.cart.items);
		const isItemAlreadyInCart = cartItems.some(
			(previousPayload) =>
				previousPayload.product.id === action.payload.product.id,
		);
		if (!isItemAlreadyInCart) {
			yield put({ type: "APP/CART/ITEMS/ADD/FINISH", payload: action.payload });
			yield put({
				type: "APP/CART/TOTAL/CALCULATE",
			});
		}
		yield call(redirect, "/checkout");
	}
}

function* handleCartItemRemove() {
	while (true) {
		const action = yield take("APP/CART/ITEMS/REMOVE/START");
		yield put({
			type: "APP/CART/ITEMS/REMOVE/FINISH",
			payload: action.payload,
		});
		yield put({
			type: "APP/CART/TOTAL/CALCULATE",
		});
		yield put({
			type: "APP/NOTIFICATIONS/ADD",
			payload: {
				message: `${action.payload.item.product.title} removed from cart.`,
			},
		});
	}
}

function* handleCartItemsRemoveAll() {
	while (true) {
		yield take("APP/CART/ITEMS/REMOVEALL/START");
		yield put({
			type: "APP/CART/ITEMS/REMOVEALL/FINISH",
		});
		yield put({
			type: "APP/CART/TOTAL/CALCULATE",
		});

	}
}

function* handleCartTotal() {
	while (true) {
		yield take("APP/CART/TOTAL/CALCULATE");
		const cartItems = yield select((state) => state.app.cart.items);
		const cartTotal = yield call(calculateCartTotal, cartItems);
		yield put({
			type: "APP/CART/TOTAL/UPDATE",
			payload: cartTotal,
		});
	}
}

function* handleCartItemQuanity() {
	while (true) {
		const action = yield take("APP/CART/ITEM/QUANTITY/UPDATE/START");
		yield put({
			type: "APP/CART/ITEM/QUANTITY/UPDATE/FINISH",
			payload: action.payload,
		});
		//no need to check if item is in cart first as quantity
		//is currently only alterable within the cart view
		//just make sure price is updated after quantity change
		yield put({
			type: "APP/CART/TOTAL/CALCULATE",
		});
	}
}

export default function* () {
	yield all([
		handleCartItemAdd(),
		handleCartItemAddAndCheckout(),
		handleCartItemRemove(),
		handleCartItemsRemoveAll(),
		handleCartItemQuanity(),
		handleCartTotal(),
	]);
}

//helpers
async function calculateCartTotal(cartItems) {
	let total = 0;
	await cartItems.forEach((item) => {
		total += item.product.price * item.quantity;
	});
	return total;
}

function redirect(path: string) {
	window.location.pathname = path;
}
