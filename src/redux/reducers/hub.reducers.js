import * as types from "../constants/hub.constants";

const initialState = {
  hub: [],
  isLoading: false,
  buttonTags: [],
};

const hubReducer = (state = initialState, action) => {
  console.log("in hub reducer", action);
  const { type, payload, buttonTags } = action;
  switch (type) {
    case types.GET_HUB_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_HUB_SUCCESS:
      return {
        ...state,
        hub: payload,
        buttonTags: buttonTags,
        isLoading: false,
      };
    case types.GET_HUB_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default hubReducer;
