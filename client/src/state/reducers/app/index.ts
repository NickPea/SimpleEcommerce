// app state

import {combineReducers} from '@reduxjs/toolkit';   

//reducers
import notificationsReducer from './notifications';
import cartReducer from './cart'

export default combineReducers({
    notifications: notificationsReducer,
    cart: cartReducer,
})