//

import cloneDeep from "lodash/cloneDeep";

const prelaodedState = {
	categories: [],
	display: {
		title: "",
		products: [],
	},
};

export default function (
	state = prelaodedState,
	action: { type: string; payload: object[] },
) {
	switch (action.type) {
		case "DATA/STORE-PAGE/CATEGORY/INIT":
			{
				const _state = cloneDeep(state);
				return { ..._state, categories: action.payload };
			}
			break;
		case "DATA/STORE-PAGE/DISPLAY/INIT":
			{
				const _state = cloneDeep(state);
				return { ..._state, display: action.payload };
			}
			break;
		case "DATA/STORE-PAGE/DISPLAY/FETCHED":
			{
				const _state = cloneDeep(state);
				return { ..._state, display: action.payload };
			}
			break;
		default:
			return state;
			break;
	}
}
