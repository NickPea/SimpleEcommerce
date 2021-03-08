//

import cloneDeep from "lodash/cloneDeep";

interface Action {
	type: string;
	payload: object;
}

const preloadedState = {
	items: [],
	total: 0,
};

export default function (state = preloadedState, action: Action) {
	switch (action.type) {
		case "APP/CART/ITEMS/ADD/FINISH":
			{
				const _state = cloneDeep(state);
				_state.items.push(action.payload);
				return _state;
			}
			break;
		case "APP/CART/TOTAL/UPDATE":
			{
				const _state = cloneDeep(state);
				_state.total = action.payload;
				return _state;
			}
			break;
		case "APP/CART/ITEM/QUANTITY/UPDATE/FINISH":
			{
				const _state = cloneDeep(state);
				//find and update item with productId.. and update quantity
				_state.items.forEach((item) => {
					if (item.product.id === action.payload.productId) {
						item.quantity = action.payload.quantity;
					}
				});
				return _state;
			}
			break;
		case "APP/CART/ITEMS/REMOVE/FINISH":
			{
				const _state = cloneDeep(state);
				_state.items.splice(action.payload.indexToRemove, 1);
				return _state;
			}
			break;
		case "APP/CART/ITEMS/REMOVEALL/FINISH":
			{
				const _state = cloneDeep(state);
				_state.items.splice(0, _state.items.length);
				return _state;
			}
			break;
		default:
			return state;
			break;
	}
}
