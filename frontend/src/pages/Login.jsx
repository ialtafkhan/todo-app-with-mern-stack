import React from 'react'
import { Link } from 'react-router-dom'

import { useFormik } from 'formik'
import *as yup from 'yup'
import { useDispatch } from "react-redux"
import { userLoginAction } from '../store/action/userAction'

export default function Login() {
    const dispatch = useDispatch()
    const fromik = useFormik({
        initialValues: {
            email: "altafpathan@gmail.com",
            password: "123"
        },
        validationSchema: yup.object({
            email: yup.string().required(),
            password: yup.string().required()

        }),
        onSubmit: ({ email, password }) => {

            dispatch(userLoginAction({ email, password }))

        }

    })
    return (
        <>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header">login</div>
                            <div className="card-body">
                                <form onSubmit={fromik.handleSubmit} >
                                    <div className='mt-2'>
                                        <label className='label-control' htmlFor="email">Email</label>
                                        <input
                                            value={fromik.values.email}
                                            onChange={fromik.handleChange}
                                            type="emial"
                                            id='email'
                                            className='form-control'
                                            placeholder='please  enter email'

                                        />
                                    </div>
                                    <div className='mt-2'>
                                        <label htmlFor="password" className='label-control' >password</label>

                                        <input
                                            value={fromik.values.password}
                                            onChange={fromik.handleChange}
                                            type="password"
                                            id='password'
                                            className='form-control'
                                            placeholder='please  enter password'

                                        />
                                    </div>
                                    <button className='btn btn-primary w-100 mt-3' type='submit'>login
                                    </button>
                                    <p>Dont haave a acount? <Link to={'/signup'} >signup</Link> </p>



                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
