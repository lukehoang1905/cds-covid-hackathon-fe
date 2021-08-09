import { toast } from "react-toastify";
import * as types from "../constants/requests.constant";
import api from "../../apiService";

const getRequests = (pageNum, limit, query) => async (dispatch) => {
    dispatch({ type: types.GET_REQUESTS_REQUEST, payload: null });
    try {
        let url = `${process.env.REACT_APP_BACKEND_API}api/REQUESTS?page=${pageNum}&limit=${limit}`;
        if (query) url += `&q=${query}`;

        const data = await api.get(url);
        console.log("hahaha", data)
        dispatch({ type: types.GET_REQUESTS_SUCCESS, payload: data.data.data });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.GET_REQUESTS_FAILURE, payload: error });
    }
};


// const getRequestDetail = (requestId) => async (dispatch) => {
//     dispatch({ type: types.GET_Request_DETAIL_REQUEST, payload: null });
//     try {

//         let url = `${process.env.REACT_APP_BACKEND_API}api/Requests/${RequestId}`

//         const data = await api.get(url);
//         console.log("hahaha", data)

//         dispatch({ type: types.GET_Request_DETAIL_SUCCESS, payload: data.data.data });
//     } catch (error) {
//         toast.error(error.message);
//         dispatch({ type: types.GET_Request_DETAIL_FAILURE, payload: error });
//     }
// };


const requestsActions = { getRequests};
export default requestsActions;