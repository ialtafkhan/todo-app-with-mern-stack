import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header">login</div>
                            <div className="card-body">
                                <div className='mt-2'>
                                    <label className='label-control' htmlFor="email">Email</label>
                                    <input type="emial"
                                        id='email'
                                        className='form-control'
                                        placeholder='please  enter email'

                                    />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="password" className='label-control' >password</label>

                                    <input type="password"
                                        id='password'
                                        className='form-control'
                                        placeholder='please  enter password'

                                    />
                                </div>
                                <button className='btn btn-primary w-100 mt-3' type='submit'>login
                                </button>
                                <p>Dont haave a acount? <Link to={'/signup'} >signup</Link> </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
