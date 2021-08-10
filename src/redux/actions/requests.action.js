import { toast } from "react-toastify";
import * as types from "../constants/requests.constant";
import api from "../../apiService";

const getRequests = (pageNum, limit, isDone) => async (dispatch) => {
  dispatch({ type: types.GET_REQUESTS_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}charity/request?page=${pageNum}?limit=${limit}?isDone=${isDone}`;
    const data = await api.get(url);
    dispatch({
      type: types.GET_REQUESTS_SUCCESS,
      payload: data.data.requests,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_REQUESTS_FAILURE, payload: error });
  }
};

const getRequestDetail = (requestId) => async (dispatch) => {
  dispatch({ type: types.GET_REQUEST_DETAIL_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}api/requests/${requestId}`;
    const data = await api.get(url);

    dispatch({
      type: types.GET_REQUEST_DETAIL_SUCCESS,
      payload: data.data.data,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_REQUEST_DETAIL_FAILURE, payload: error });
  }
};

const requestsActions = { getRequests, getRequestDetail };
export default requestsActions;
