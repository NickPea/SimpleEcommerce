// data state

import { combineReducers } from "@reduxjs/toolkit";

//reducers
import landingPageReducer from "./landing-page";
import storePageReducer from "./store-page";
import itemPageReducer from "./item-page";

export default combineReducers({
	landing_page: landingPageReducer,
	store_page: storePageReducer,
	item_page: itemPageReducer,
});
