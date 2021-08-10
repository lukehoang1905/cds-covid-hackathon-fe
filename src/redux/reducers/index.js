import { combineReducers } from "redux";
import requestsReducer from "./requests.reducer"
import hubReducer from "./hub.reducers";
import authReducer from "./auth.reducer";

export default combineReducers({
    requestsReducer: requestsReducer,
    authReducer: authReducer,
    hubReducer: hubReducer,
});
