import React from 'react'
import { Link } from 'react-router-dom';
import { Formik, useFormik } from 'formik'
import *as yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { userSignupAction } from '../store/action/userAction';

export default function SignUp() {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: "altaf",
            email: "altafpathan@gmail.com",
            password: "123",
            cpassword: "123"

        },
        validationSchema: yup.object({
            name: yup.string().required("plse eneter your name").min(2, "min 2 charecter required"),
            email: yup.string().required("email").email("plse eneter valid email"),
            password: yup.string().required("plz eneter your password"),
            cpassword: yup.string()
                .oneOf([yup.ref("password"), null, "password shuld match"])
        }),


        onSubmit: (values) => {
            console.log(values);
            dispatch(userSignupAction(values))


        }
    })

    return (
        <>
            <div className="container mt-2">
                {JSON.stringify(formik.errors)}
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header text-center ">Signup</div>
                            <div className="card-body">

                                <form onSubmit={formik.handleSubmit} >
                                    <div>
                                        <label htmlFor="name" className="form-label">First name</label>
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                            type="text"
                                            className={
                                                formik.errors.name
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="name"
                                            placeholder="Enter your name"
                                        />

                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.name}</div>
                                    </div>
                                    <div className="mt-2">
                                        <label htmlFor="email" className="form-label">First Email</label>
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                            type="text"
                                            className={
                                                formik.errors.email
                                                    ? "form-control is-invalid"
                                                    : "form-control"
                                            }
                                            id="email"
                                            placeholder="Enter Your Email"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback"> {formik.errors.email} </div>
                                    </div>
                                    <div className="mt-2">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            type="text"
                                            className={
                                                formik.errors.password
                                                    ? "form-control is-invalid"
                                                    : "form-control"

                                            }
                                            id="password"
                                            placeholder="Enter Your Password"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">{formik.errors.password}</div>
                                    </div>
                                    <div className="mt-2">
                                        <label htmlFor="cpassword" className="form-label"
                                        >Confirm Password</label
                                        >
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.cpassword}
                                            type="text"
                                            className={
                                                formik.errors.cpassword
                                                    ? "form-control is-invlaid "
                                                    : "form-control"
                                            }
                                            id="cpassword"
                                            placeholder="Confirm Your Password"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">
                                            {formik.errors.cpassword}
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 mt-3">
                                        Signup
                                    </button>

                                    <p className="text-center mt-3">
                                        Already Have Account? <Link to={'/login'}  >Login</Link  >
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
