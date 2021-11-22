import { combineReducers } from "redux";
import alert from './alert';
import auth from './auth';
import packages from './package';

export default combineReducers({
    alert,
    auth,
    packages
})