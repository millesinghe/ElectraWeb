import { combineReducers } from "redux";

import ProjectReducer from "./projectReducer";
import UserReducer from "./userReducer";

export default combineReducers({ 
    project : ProjectReducer,
    user : UserReducer
});
