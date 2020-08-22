import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import dashboardReducer from "./DashboardReducer"

export const rootReducer = combineReducers({
    authReducer,
    dashboardReducer
});