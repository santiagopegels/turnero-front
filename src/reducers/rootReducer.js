import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { queueReducer } from "./queueReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    queue: queueReducer,
    ui: uiReducer
})