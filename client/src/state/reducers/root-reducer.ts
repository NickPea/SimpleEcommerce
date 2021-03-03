/**
 * root reducer
 */

import { combineReducers } from "@reduxjs/toolkit";

//reducers
import uiReducer from "./ui";
import appReducer from "./app/index";
import dataReducer from "./data";

export default combineReducers({
	data: dataReducer,
	app: appReducer,
	ui: uiReducer,
});
