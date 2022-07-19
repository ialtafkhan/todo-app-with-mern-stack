import axios from "axios"
import {
    ADD_TODO_REQUEST,
    ADD_TODO_REQUEST_FAIL,
    ADD_TODO_REQUEST_SUCCESS,
    DELETE_SINGLE_TODO_REQUEST
    , DELETE_SINGLE_TODO_REQUEST_FAIL,
    DELETE_SINGLE_TODO_REQUEST_SUCCESS,
    GET_ALL_TODO_REQUEST, GET_ALL_TODO_REQUEST_FAIL,
    GET_ALL_TODO_REQUEST_SUCCESS,
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_REQUEST_FAIL,
    UPDATE_TODO_REQUEST_SUSCCESS,
    DELETE_TODO_REQUEST,
    DELETE_TODO_REQUEST_SUCCESS,
    DELETE_TODO_REQUEST_FAIL,
    UPDATE_STATUS_REQUEST,
    UPDATE_STATUS_REQUEST_SUCCESS,
    UPDATE_STATUS_REQUEST_FAII,

} from "../constant/todoConstant"





export const addTodoAction = (formData) => async (dispatch) => {

    try {
        dispatch({ type: ADD_TODO_REQUEST })

        const { data } = await axios.post('/todo', formData)
        console.log(data);
        dispatch({ type: ADD_TODO_REQUEST_SUCCESS, payload: data.result })


    } catch (error) {

        dispatch({ type: ADD_TODO_REQUEST_FAIL, payload: error })
    }



}

export const getTodoAction = () => async (dispatch, getstate) => {


    try {
        dispatch({ type: GET_ALL_TODO_REQUEST })
        const config = {
            headers: {
                "Authorization": getstate().user.login.token
            }
        }

        const { data } = await axios.get('/todo', config)
        // console.log(data);

        dispatch({ type: GET_ALL_TODO_REQUEST_SUCCESS, payload: data.result })
        localStorage.setItem("todo", JSON.stringify(data.result))


    } catch (error) {

        dispatch({ type: GET_ALL_TODO_REQUEST_FAIL, payload: error })
    }

}


export const updateStatusAction = (id, val) => async (dispatch, getstate) => {
    console.log(id, val);
    console.log(getstate());

    try {
        dispatch({ type: UPDATE_STATUS_REQUEST })
        // const config = {
        //     headers: {

        //         "Authorization": getstate().user.login.token
        //     }

        // }
        const { data } = await axios.put(`/todo/status/${id}`, { status: val })
        dispatch(getTodoAction())

        console.log(data);

        dispatch({ type: UPDATE_STATUS_REQUEST_SUCCESS })


    } catch (error) {

        dispatch({ type: UPDATE_STATUS_REQUEST_FAII })
    }

}
export const editTodoAction = (id, fd) => async (dispatch) => {
    console.log(id, fd);

    try {
        dispatch({ type: UPDATE_TODO_REQUEST })

        const { data } = await axios.put(`/todo/update/${id}`, fd)
        dispatch(getTodoAction())

        console.log(data);

        dispatch({ type: UPDATE_TODO_REQUEST_SUSCCESS })


    } catch (error) {

        dispatch({ type: UPDATE_TODO_REQUEST_FAIL })
    }

}


export const deleteSingleTodoAction = (id) => async (dispatch) => {
    // console.log(fd);

    try {
        dispatch({ type: DELETE_SINGLE_TODO_REQUEST })

        const { data } = await axios.delete(`/todo/delete/${id}`)

        console.log(data);
        dispatch(getTodoAction())

        dispatch({ type: DELETE_SINGLE_TODO_REQUEST_SUCCESS })


    } catch (error) {

        dispatch({ type: DELETE_SINGLE_TODO_REQUEST_FAIL })
    }

}



export const deleteAllTodoAction = () => async (dispatch) => {

    try {
        dispatch({ type: DELETE_TODO_REQUEST })
        const { data } = await axios.delete("/todo")
        localStorage.removeItem("todo")
        dispatch({ type: DELETE_TODO_REQUEST_SUCCESS })
        getTodoAction()

    } catch (error) {
        dispatch({ type: DELETE_TODO_REQUEST_FAIL, payload: error })

    }

}