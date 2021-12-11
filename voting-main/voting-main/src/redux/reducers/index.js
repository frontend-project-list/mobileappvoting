import { combineReducers } from "redux";
import positions from "./positions";
import user from "./user";


export default combineReducers({user, positions});