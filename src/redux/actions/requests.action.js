import { toast } from "react-toastify";
import * as types from "../constants/requests.constant";
import api from "../../apiService";

const getRequests = (pageNum, limit, query) => async (dispatch) => {
  dispatch({ type: types.GET_REQUESTS_REQUEST, payload: null });
  try {
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=b7c8eb3c05b2540a3a73f91675a4380f`;
    // if (query) url += `&q=${query}`;

    const data = await api.get(url);
    console.log("hahaha", data);
    dispatch({ type: types.GET_REQUESTS_SUCCESS, payload: data.data.results });
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

const requestsActions = { getRequests, getRequestDetail };
export default requestsActions;
