import * as types from "../constants/hub.constants";

const initialState = {
  hub: [],
  loading: false,
  buttonTags: [],
};

const hubReducer = (state = initialState, action) => {
  console.log("in hub reducer", action);
  const { type, payload } = action;
  switch (type) {
    case types.GET_HUB_REQUEST:
      return { ...state, loading: true };
    case types.GET_HUB_SUCCESS:
      return {
        ...state,
        hub: payload,
        buttonTags: Object.keys(payload.requestDeliver),
        loading: false,
      };
    case types.GET_HUB_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default hubReducer;
