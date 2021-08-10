import { toast } from "react-toastify";
import * as types from "../constants/hub.constants";
import api from "../../apiService";

const getHubDetail = (storeId) => async (dispatch) => {
  if (!storeId) return new Error("No store id");
  dispatch({ type: types.GET_HUB_DETAIL_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}charity/store/${storeId}`;
    const data = await api.get(url);
    const buttonTags = Object.keys(data.data.store.requestDeliver);
    console.log("get hub detail", data);
    dispatch({
      type: types.GET_HUB_SUCCESS,
      payload: data.data.store,
      buttonTags: buttonTags,
    });
    dispatch({ type: types.GET_HUB_DETAIL_SUCCESS, payload: data.data.store });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_HUB_DETAIL_FAILURE, payload: error });
  }
};

const getHubs = () => async (dispatch) => {
  dispatch({ type: types.GET_HUB_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}charity/store`;
    const data = await api.get(url);
    console.log("get hubs", data);
    dispatch({ type: types.GET_HUB_SUCCESS, payload: data.data.store });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_HUB_FAILURE, payload: error });
  }
};

const hubActions = { getHubDetail, getHubs };
export default hubActions;
