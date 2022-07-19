import {
    USER_LOGIN_REQHEST,
    USER_LOGIN_REQHEST_FAIL,
    USER_LOGIN_REQHEST_SUCCESS,
    USER_LOGOUT,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_REQUEST_FAIL,
    USER_SIGNUP_REQUEST_SUCCESS
} from "../constant/userConstant"




export const userReducer = (state = { users: [] }, { type, payload }) => {

    switch (type) {

        case USER_SIGNUP_REQUEST: return { isLoading: true }
        case USER_SIGNUP_REQUEST_SUCCESS: return { isLoading: false, users: payload }
        case USER_SIGNUP_REQUEST_FAIL: return { isLoading: false, error: payload }

        case USER_LOGIN_REQHEST: return { isLoading: true }
        case USER_LOGIN_REQHEST_SUCCESS: return { isLoading: false, login: payload }
        case USER_LOGIN_REQHEST_FAIL: return { isLoading: false, error: payload }

        case USER_LOGOUT: return { users: [] }

        default: return state


    }

}