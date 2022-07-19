import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { userReducer } from "./reducer/userReducer"
import { todoReducer } from "./reducer/todoReducer"

const localLogin = localStorage.getItem("userLogin")
    ? { login: JSON.parse(localStorage.getItem("userLogin")) }
    : {}



const rootReducer = combineReducers({
    user: userReducer,
    AllTodos: todoReducer
})
const initialstate = {
    // todo: todoList
    user: localLogin
}


const store = createStore(
    rootReducer,
    initialstate,
    composeWithDevTools(applyMiddleware(thunk))
)


export default store