import * as types from "../constants/auth.constant";
const initialState = {

    loading: false,
    user: {
        phone: "",
        password: ""
    }
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(action);
    switch (type) {

        case types.LOGIN_REQUEST:
            return { ...state, loading: true };
        case types.LOGIN_SUCCESS:
            return { ...state, user: payload, loading: false };
        case types.LOGIN_FAILURE:
            return { ...state, loading: false };

        case types.REGISTER_REQUEST:
            return { ...state, loading: true };
        case types.REGISTER_SUCCESS:
            return { ...state, user: payload, loading: false };
        case types.REGISTER_FAILURE:
            return { ...state, loading: false };

        default:
            return state;
    }
};

export default authReducer;