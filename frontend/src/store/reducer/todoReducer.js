const { ADD_TODO_REQUEST,
    ADD_TODO_REQUEST_SUCCESS,
    ADD_TODO_REQUEST_FAIL,
    GET_ALL_TODO_REQUEST,
    GET_ALL_TODO_REQUEST_SUCCESS,
    GET_ALL_TODO_REQUEST_FAIL,
    GET_SINGLE_TODO_REQUEST,
    GET_SINGLE_TODO_REQUEST_FAIL,
    GET_SINGLE_TODO_REQUEST_SUCCESS,
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_REQUEST_SUSCCESS,
    UPDATE_TODO_REQUEST_FAIL
    , DELETE_SINGLE_TODO_REQUEST,
    DELETE_SINGLE_TODO_REQUEST_SUCCESS,
    DELETE_SINGLE_TODO_REQUEST_FAIL,
    DELETE_TODO_REQUEST,
    DELETE_TODO_REQUEST_SUCCESS,
    DELETE_TODO_REQUEST_FAIL,
    UPDATE_STATUS_REQUEST,
    UPDATE_STATUS_REQUEST_SUCCESS,
    UPDATE_STATUS_REQUEST_FAII,
} = require("../constant/todoConstant")




exports.todoReducer = (state = { todo: [], singleTodo: [] }, { type, payload }) => {

    switch (type) {
        case ADD_TODO_REQUEST: return { isLoading: true }
        case ADD_TODO_REQUEST_SUCCESS: return { isLoading: false, todo: payload }
        case ADD_TODO_REQUEST_FAIL: return { isLoading: false, error: payload }

        case GET_ALL_TODO_REQUEST: return { ...state, isLoading: true }
        case GET_ALL_TODO_REQUEST_SUCCESS: return { ...state, isLoading: false, todo: payload }
        case GET_ALL_TODO_REQUEST_FAIL: return { ...state, isLoading: false, error: payload }

        case GET_SINGLE_TODO_REQUEST: return { ...state, isLoading: true }
        case GET_SINGLE_TODO_REQUEST_SUCCESS: return { ...state, isLoading: false, singleTodo: payload }
        case GET_SINGLE_TODO_REQUEST_FAIL: return { ...state, isLoading: false, error: payload }

        case UPDATE_TODO_REQUEST: return { ...state, isLoading: true }
        case UPDATE_TODO_REQUEST_SUSCCESS: return { ...state, isLoading: false, isUpdated: true }
        case UPDATE_TODO_REQUEST_FAIL: return { ...state, isLoading: false, isUpdated: false, error: payload, }

        case DELETE_SINGLE_TODO_REQUEST: return { ...state, isLoading: true }
        case DELETE_SINGLE_TODO_REQUEST_SUCCESS: return { ...state, isLoading: false, isDeleted: true }
        case DELETE_SINGLE_TODO_REQUEST_FAIL: return { ...state, isLoading: false, isDeleted: false, error: payload, }

        case DELETE_TODO_REQUEST: return { ...state, isLoading: true }
        case DELETE_TODO_REQUEST_SUCCESS: return { ...state, isLoading: false, deletedAllTodo: true }
        case DELETE_TODO_REQUEST_FAIL: return { ...state, isLoading: false, deletedAllTodo: false, error: payload }

        case UPDATE_STATUS_REQUEST: return { ...state, isLoading: true }
        case UPDATE_STATUS_REQUEST_SUCCESS: return { ...state, isLoading: false, staus: true }
        case UPDATE_STATUS_REQUEST_FAII: return { ...state, isLoading: false, staus: false, error: payload }
        default: return state
    }

}