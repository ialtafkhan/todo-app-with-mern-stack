import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from "../store/action/userAction"
import './Style.css'



export default function Navbar() {
    const dispacth = useDispatch()
    const { login } = useSelector(state => state.user)
    const navigate = useNavigate()
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* <Link className="nav-link active" href="#">Home</Link> */}

                            {
                                login?.name
                                    ? <>
                                        <a className='navbar-brand' > {login?.name} </a  >
                                        <Link className='nav-link' to={'/login'} onClick={e => {
                                            dispacth(logoutAction())
                                            // navigate("/login")
                                        }} >Logout</Link>
                                        <Link className="nav-link" to={'/todo'} >Add New Todo</Link>
                                        <Link className="nav-link" to={'/admin/alltodo'} >All Todo List</Link>

                                    </>
                                    : <>
                                        <Link className="nav-link" to={'/signup'}>signup</Link>
                                        <Link className="nav-link" to={'/login'} >login</Link>
                                    </>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
