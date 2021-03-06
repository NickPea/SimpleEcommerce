//

import cloneDeep from 'lodash/cloneDeep'

interface Action {
	type: string;
	payload: object;
}

const preloadedState = [];

export default function (state = preloadedState, action: Action) {
	switch (action.type) {
		case "APP/CART/ADD/APPROVED":
			{
                const _state = cloneDeep(state);
                _state.push(action.payload);
                return _state;
			}
			break;
		default:
			return state;
			break;
	}
}
