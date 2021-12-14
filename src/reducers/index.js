import { combineReducers } from "redux"
import breakReducer from "./break"
import sessionReducer from "./session"

const rootReducer = combineReducers({
    break: breakReducer, 
    session: sessionReducer,
});

export default rootReducer;
