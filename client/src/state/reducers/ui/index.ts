//

import cloneDeep from "lodash/cloneDeep";

const preloadedState = {
	app_is_loading: false,
	cart_is_visible: false,
};

interface ActionTypes {
	type: string;
	payload: object;
}

export default (state = preloadedState, action: ActionTypes) => {
	switch (action.type) {
		case "UI/CART-TOGGLE":
			{
				const _state = cloneDeep(state);
				return { ..._state, cart_is_visible: !_state.cart_is_visible };
			}
			break;
		case "UI/CART/OPEN":
			{
				const _state = cloneDeep(state);
				return { ..._state, cart_is_visible: true };
			}
			break;
		case "UI/CART/CLOSE":
			{
				const _state = cloneDeep(state);
				return { ..._state, cart_is_visible: false };
			}
			break;
		case "UI/APP-START-LOADING":
			{
				const _state = cloneDeep(state);
				return { ..._state, app_is_loading: true };
			}
			break;
		case "UI/APP-STOP-LOADING":
			{
				const _state = cloneDeep(state);
				return { ..._state, app_is_loading: false };
			}
			break;
		default:
			return state;
			break;
	}
};
