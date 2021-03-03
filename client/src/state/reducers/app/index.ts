// app state

import {combineReducers} from '@reduxjs/toolkit';   

//reducers
import notificationsReducer from './notifications';

export default combineReducers({
    notifications: notificationsReducer,
})