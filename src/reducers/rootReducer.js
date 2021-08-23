import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { queueReducer } from "./queueReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    queue: queueReducer
})