import { toast } from "react-toastify";
import * as types from "../constants/auth.constant";
import api from "../../apiService";

const login = (user) => async (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST, payload: null });
    try {
        let url = `${process.env.REACT_APP_BACKEND_API}charity/auth`;
        console.log("this data", user)
        const data = await api.post(url, user)

        dispatch({ type: types.LOGIN_SUCCESS, payload: data });
        toast.success(`Welcome`);

    } catch (error) {
        dispatch({ type: types.LOGIN_FAILURE, payload: error });
    }
};



const authActions = { login };
export default authActions;