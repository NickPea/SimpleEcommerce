//

import cloneDeep from 'lodash/cloneDeep'

const preloadedState = {
	cart_is_visible: false,
};

export default (state = preloadedState, action) => {
	switch (action.type) {
		case "UI/CART-TOGGLE":
			{
				const _state = cloneDeep(state);
				return { ..._state, cart_is_visible: !_state.cart_is_visible };
			}
			break;
		default:
			return state;
			break;
	}
};
