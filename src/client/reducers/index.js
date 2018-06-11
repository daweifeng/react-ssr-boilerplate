import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import authReducer from './auth_reducer';
import adminsReducer from './admins_reducer';

export default combineReducers({
    users: userReducer,
    auth: authReducer,
    admins: adminsReducer
});