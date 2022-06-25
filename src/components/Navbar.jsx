import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Navbar() {
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
                            <Link className="nav-link" to={'/signup'}  >signup</Link>
                            <Link className="nav-link" to={'/login'} >login</Link>
                            <select className='form-select  w-50'>
                                <option selected>open menu</option>
                                <option value="school"> school</option>
                                <option value="office">office</option>
                                <option value="work">work</option>

                            </select>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
