//

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

//root reducer
import rootReducer from "../reducers/root-reducer";

//root saga
import rootSaga from "../middleware/sagas/root-saga";

//middleware
const sagaMiddleware = createSagaMiddleware();

//store
const store = configureStore({
	reducer: rootReducer,
	middleware: [sagaMiddleware],
	// devTools,
	// preloadedState,
	// enhancers,
});

sagaMiddleware.run(rootSaga);

export default store;
