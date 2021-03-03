// data state

import { combineReducers } from "@reduxjs/toolkit";

//reducers
import landingPageReducer from "./landing-page";

export default combineReducers({
	landing_page: landingPageReducer,
});
