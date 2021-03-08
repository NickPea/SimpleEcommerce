//

import cloneDeep from "lodash/cloneDeep";

const preloadedState = {
	loading: false,
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
		case "UI/LOADING/ON":
			{
				const _state = cloneDeep(state);
				return { ..._state, loading: true };
			}
			break;
		case "UI/LOADING/OFF":
			{
				const _state = cloneDeep(state);
				return { ..._state, loading: false };
			}
			break;
		default:
			return state;
			break;
	}
};
