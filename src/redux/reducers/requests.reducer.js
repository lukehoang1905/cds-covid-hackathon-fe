import * as types from "../constants/requests.constant";

const initialState = {
  requests: [],
  loading: false,
  selectedRequest: null,
};

const requestsReducer = (state = initialState, action) => {
  console.log("hihi", action);
  const { type, payload } = action;

  switch (type) {
    case types.GET_REQUESTS_REQUEST:
      return { ...state, loading: true };
    case types.GET_REQUESTS_SUCCESS:
      return { ...state, requests: payload, loading: false };
    case types.GET_REQUESTS_FAILURE:
      return { ...state, loading: false };

    case types.GET_REQUEST_DETAIL_REQUEST:
      return { ...state, loading: true };
    case types.GET_REQUEST_DETAIL_SUCCESS:
      return { ...state, selectedRequest: payload, loading: false };
    case types.GET_REQUEST_DETAIL_FAILURE:
      return { ...state, loading: false };

    case types.CREATE_REQUESTS_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_REQUESTS_SUCCESS:
      return { ...state, requests: payload, loading: false };
    case types.CREATE_REQUESTS_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default requestsReducer;
