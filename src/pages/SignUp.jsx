import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header text-center ">Signup</div>
                            <div className="card-body">
                                <div>
                                    <label htmlFor="name" className="form-label">First name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="email" className="form-label">First Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a password.</div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="cpassword" className="form-label"
                                    >Confirm Password</label
                                    >
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cpassword"
                                        placeholder="Confirm Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">
                                        Please Recheck Your Password.
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p className="text-center mt-3">
                                    Already Have Account? <Link to={'/login'}  >Login</Link  >
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
