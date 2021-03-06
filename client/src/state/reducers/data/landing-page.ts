//

import cloneDeep from "lodash/cloneDeep";

const prelaodedState = { featured: [] };

export default function (
	state = prelaodedState,
	action: { type: string; payload: object[] },
) {
	switch (action.type) {
		case "DATA/LANDING-PAGE/FEATURED/INIT":
			{
				const _state = cloneDeep(state);
				return { ..._state, featured: action.payload };
			}
			break;
		default:
			return state;
			break;
	}
}
