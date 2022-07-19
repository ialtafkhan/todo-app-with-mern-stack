import axios from 'axios'

import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_REQUEST_SUCCESS,
    USER_SIGNUP_REQUEST_FAIL,
    USER_LOGIN_REQHEST,
    USER_LOGIN_REQHEST_SUCCESS,
    USER_LOGIN_REQHEST_FAIL,
    USER_LOGOUT
} from '../constant/userConstant'
export const userSignupAction = (formdata) => async (dispatch) => {

    try {
        dispatch({ type: USER_SIGNUP_REQUEST })
        const { data } = await axios.post('/user/signup', formdata)
        console.log(data);
        dispatch({ type: USER_SIGNUP_REQUEST_SUCCESS, payload: data })


    } catch (error) {

        dispatch({ type: USER_SIGNUP_REQUEST_FAIL, payload: error })
    }

}
export const userLoginAction = ({ email, password }) => async (dispatch) => {

    try {
        dispatch({ type: USER_LOGIN_REQHEST })
        const { data } = await axios.post('/user/login', { email, password })
        console.log(data);

        if (data.result.token) {
            dispatch({ type: USER_LOGIN_REQHEST_SUCCESS, payload: data.result })
            localStorage.setItem("userLogin", JSON.stringify(data.result))
        } else {
            dispatch({ type: USER_LOGIN_REQHEST_FAIL, payload: "paswwoerd or email wrong" })

        }

    } catch (error) {

        dispatch({ type: USER_LOGIN_REQHEST_FAIL, payload: error })
    }

}

export const logoutAction = () => (dispatch) => {
    dispatch({ type: USER_LOGOUT })
    localStorage.removeItem("Login")

}