import { combineReducers } from "redux";

import ProjectReducer from "./projectReducer";
import ProjectSelectorReducer from "./projectSelectorReducer";
import UserReducer from "./userReducer";

export default combineReducers({ 
    project : ProjectReducer,
    isProjectSelect : ProjectSelectorReducer,
    user : UserReducer
});
