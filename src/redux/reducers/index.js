import { combineReducers } from "redux";
import requestsReducer from "./requests.reducer"

export default combineReducers({
    requestsReducer: requestsReducer,
});