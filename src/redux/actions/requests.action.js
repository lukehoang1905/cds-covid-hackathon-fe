import { toast } from "react-toastify";
import * as types from "../constants/requests.constant";
import api from "../../apiService";

const getRequests = () => async (dispatch) => {
  dispatch({ type: types.GET_REQUESTS_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}charity/request`;
    // if (query) url += `&q=${query}`;

    const data = await api.get(url);
    console.log("hahaha", data);
    dispatch({ type: types.GET_REQUESTS_SUCCESS, payload: data.data.requests });
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
    console.log("hahaha", data);

    dispatch({
      type: types.GET_REQUEST_DETAIL_SUCCESS,
      payload: data.data.data,
    });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_REQUEST_DETAIL_FAILURE, payload: error });
  }
};

const createRequests = (request) => async (dispatch) => {
  dispatch({ type: types.CREATE_REQUESTS_REQUEST, payload: null });
  try {
    let url = `https://cs-covid-be.herokuapp.com/charity/request`;

    const data = await api.create(url, request);
    console.log("hahaha", data);
    dispatch({ type: types.CREATE_REQUESTS_SUCCESS, payload: data.data.requests });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.CREATE_REQUESTS_FAILURE, payload: error });
  }
};

const requestsActions = { getRequests, getRequestDetail, createRequests };
export default requestsActions;
