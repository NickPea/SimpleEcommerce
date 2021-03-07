//

import cloneDeep from "lodash/cloneDeep";

const preloadedState = {
	product: {}
};

export default function (
	state = preloadedState,
	action: { type: string; payload: object },
) {
	switch (action.type) {
		case "DATA/ITEM-PAGE/PRODUCT/FETCHED":
			{
				const _state = cloneDeep(state);
				return { ...state, product: action.payload };
			}
			break;
		default:
			return state;
			break;
	}
}
