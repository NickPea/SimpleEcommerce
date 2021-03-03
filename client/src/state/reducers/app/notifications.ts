//

import cloneDeep from "lodash/cloneDeep";

export default (state = [], action) => {
	switch (action.type) {
		case "NOTIFICATIONS/ADD":
			{
				const _state = cloneDeep(state);
				_state.notifications.push(action.payload);
				return _state;
			}
			break;
		case "NOTIFICATIONS/REMOVE":
			{
				const _state = cloneDeep(state);
				const filtered = _state.notifications.filter(
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
