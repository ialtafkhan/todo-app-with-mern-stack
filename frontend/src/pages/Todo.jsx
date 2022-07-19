import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import *as yup from "yup"

import { useDispatch, useSelector } from 'react-redux'
import { addTodoAction, getTodoAction } from '../store/action/todoAction'
import { useNavigate } from 'react-router-dom'

export default function Todo() {
    const { todo } = useSelector(state => state.AllTodos)
    const dispacth = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            task: "addd",
            desc: "desc",
            date: "",
            priority: "",
            category: "",
            status: "",
        },
        validationSchema: yup.object({
            task: yup.string().required("task can not be empty"),
            desc: yup.string().required("desc can not be emty"),
            date: yup.string().required("date can not be emty"),
            priority: yup.string().required("priority can not be emty"),
            category: yup.string().required("category can not be emty"),
            status: yup.string().required("status can not be emty"),
        }),

        onSubmit: (values) => {
            dispacth(addTodoAction(values))


        }



    })


    // const [task, settask] = useState("")
    // const [desc, setdesc] = useState("")
    // const [priority, setpriority] = useState("school")


    // const handleSubmit = (e) => {
    //     console.log("click");
    //     e.preventDefault()
    // }
    return (
        <>

            <div class="container">
                {JSON.stringify(formik.errors)}
                {JSON.stringify(formik.values)}
                <div class="row">
                    <div class="col-sm-6 offset-sm-3">
                        <div class="card">
                            <div class="card-header">Todo</div>
                            <div class="card-body">
                                <form onSubmit={formik.handleSubmit} >

                                    <div>
                                        <label for="task" class="form-label">First task</label>
                                        <input
                                            value={formik.values.task}
                                            onChange={formik.handleChange}
                                            type="text"
                                            class="form-control"
                                            id="task"
                                            placeholder="Enter Your task"
                                        />
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please add task.</div>
                                    </div>
                                    <div class="mt-2">
                                        <label for="desc" class="form-label">Description</label>
                                        <textarea
                                            value={formik.values.desc}
                                            onChange={formik.handleChange}

                                            name="desc"
                                            id="desc"
                                            rows="4"
                                            class="form-control"
                                        >  </textarea>
                                        <div class="valid-feedback">Looks good!</div>
                                        <div class="invalid-feedback">Please add description</div>
                                    </div>

                                    <div>
                                        <label htmlFor="date">date</label>
                                        <input
                                            value={formik.values.date}
                                            onChange={formik.handleChange}

                                            type="date"
                                            class="form-control"
                                            id='date'
                                        />

                                    </div>
                                    <div class='mt-2'>

                                        <label htmlFor="category">category</label>
                                        <select
                                            value={formik.values.category}
                                            onChange={formik.handleChange}
                                            className='form-select'
                                            id='category'
                                        >
                                            <option selected value="category">select category</option>
                                            <option value="office"> office</option>
                                            <option value="personal"> personal</option>
                                            <option value="other">other</option>
                                        </select>
                                    </div>
                                    <div class="mt-2">
                                        <label for="priority"> Priority</label>
                                        <select
                                            value={formik.values.priority}
                                            onChange={formik.handleChange}
                                            class="form-select" id="priority">
                                            <option selected>Select Priority</option>
                                            <option value="high">High</option>
                                            <option value="medium">Medium</option>
                                            <option value="low">Low</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="status">status</label>

                                        <select
                                            value={formik.values.status}
                                            onChange={formik.handleChange}
                                            class="form-select" id='status'>
                                            <option selected value="status"> status</option>
                                            <option value="inprogress">inprogress</option>
                                            <option value="completed">completed</option>
                                            <option value="pending">pending</option>

                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        class="btn btn-primary w-100 mt-3"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                    >
                                        Add Todo
                                    </button>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* model window start */}
            <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Task Tracker</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {/* {
                                todo
                                    ? "somthign wroong"
                                    : "your todo added succesfuly....!"
                            } */}
                            <h1>your todo added succesfuly....!</h1>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={e => {
                                    dispacth(getTodoAction())
                                    navigate("/admin/alltodo")

                                }}
                            >
                                Todo list

                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* model window end */}





        </>
    )
}
