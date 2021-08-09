import { combineReducers } from "redux";
import requestsReducer from "./requests.reducer"
import hubReducer from "./hub.reducers";

export default combineReducers({
    requestsReducer: requestsReducer,
    hubReducer: hubReducer,
});
