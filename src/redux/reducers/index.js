import { combineReducers } from "redux";
import hubReducer from "./hub.reducers";

export default combineReducers({
  hubReducer: hubReducer,
});
