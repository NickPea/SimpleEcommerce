//

import cloneDeep from "lodash/cloneDeep";

const preloadedState = []

interface Action {
	type: string,
	payload: object
}

export default (state = preloadedState, action: Action) => {
	switch (action.type) {
		case "APP/NOTIFICATIONS/ADD":
			{
				const _state = cloneDeep(state);
				_state.push(action.payload);
				return _state;
			}
			break;
		case "APP/NOTIFICATIONS/REMOVE":
			{
				const _state = cloneDeep(state);
				const filtered = _state.filter(
					(item) => item.id === action.payload.id,
				);
				return filtered;
			}
			break;
		default:
			return state;
			break;
	}
};
