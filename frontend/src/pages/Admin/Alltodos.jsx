import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import *as yup from "yup"
import { deleteAllTodoAction, deleteSingleTodoAction, editTodoAction, getTodoAction, updateStatusAction } from '../../store/action/todoAction'
import { format } from 'date-fns'

export default function Alltodos() {
    const [etask, setetask] = useState()
    const [edesc, setedesc] = useState()
    const [edate, setedate] = useState()
    const [epriority, setepriority] = useState()
    const [ecategory, setecategory] = useState()
    const [estatus, setestatus] = useState()
    const [editId, seteditId] = useState()
    const [deleteID, setdeleteID] = useState()
    const [status, setstatus] = useState()

    const { todo } = useSelector(state => state.AllTodos)
    const dispacth = useDispatch()
    // console.log(todo);

    useEffect(() => {
        dispacth(getTodoAction())
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            task: etask,
            desc: edesc,
            date: edate,
            priority: epriority,
            category: ecategory,
            status: estatus,
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
            dispacth(editTodoAction(editId, values))

        }



    })

    return (
        <>
            {
                todo.length === 0
                    ? <h1>opps emty...!</h1>
                    : <>
                        <button onClick={e => {
                            dispacth(deleteAllTodoAction())
                        }} className='mt-2 btn btn-danger'>delete all todos</button>
                        <div className="container mt-2">
                            <div className="row">

                                {
                                    todo?.map((item) => (
                                        <div className="col-sm-4 col-xl-4 col-md-6 gap-4">
                                            <div className="card mt-3">
                                                <div className="card-header text-center ">Task Tracker</div>

                                                <div className="card-body">
                                                    <h3 className='card-text' >Name: {item?.task} </h3>
                                                    <h3 className='card-text' >Description: {item?.desc} </h3>
                                                    <h3 className='card-text' >
                                                        Date: {item?.date}
                                                        {/* {format(new Date(item?.date), "DD MM YY")} */}
                                                        {/* {format(new Date(item?.date), "DD MM YY")} */}
                                                    </h3>
                                                    <h3 className='card-text' >priority: {item?.priority} </h3>
                                                    <h3 className='card-text' >category: {item?.category} </h3>
                                                    <div className='d-flex justify-content-between' >
                                                        <h3 className='card-text' >status: {item?.status} </h3>
                                                        <button className='btn btn-primary'> <i
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#updateModal"
                                                            class="bi bi-pencil"
                                                            onClick={e => seteditId(item._id)}
                                                        ></i></button>

                                                    </div>
                                                </div>
                                                <div className="btn-group w-100">
                                                    <button className='btn btn-outline-primary'
                                                        data-toggle="tooltip"
                                                        title='edit'

                                                    >
                                                        <i
                                                            class="bi bi-pencil-square"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#editModal"
                                                            onClick={e => {
                                                                setetask(item.task)
                                                                setedesc(item.desc)
                                                                setedate(item.date)
                                                                setepriority(item.priority)
                                                                setecategory(item.category)
                                                                setestatus(item.status)
                                                                seteditId(item._id)
                                                            }} >

                                                        </i>
                                                    </button>
                                                    <button className='btn btn-outline-danger'
                                                        data-toggle="tooltip"
                                                        title='delete'

                                                    >
                                                        <i
                                                            class="bi bi-trash"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#deleteModal"
                                                            onClick={e => {
                                                                setdeleteID(item._id)
                                                            }}
                                                        ></i>

                                                    </button>

                                                </div>
                                                {/* (new Date(item.date), "dd mm yy") */}
                                            </div>

                                        </div>


                                    ))
                                }
                            </div>
                        </div>


                        {/* edit modal */}




                        <div class="modal" id="editModal">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel"> edit Modal</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
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
                                                    value={formik.values.category ? formik.values.category : " "}
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

                                            <button type="submit" class="btn btn-ary" data-bs-dismiss="modal">update</button>
                                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" >close</button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* edit modal */}
 

                        {/* deletemodal */}

                        <div class="modal" id="deleteModal" >
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel"> delte Modal</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h2>are you sure you want delete this todo....?</h2>
                                    </div>
                                    <div class="btn-group w-100">
                                        <button onClick={e => {
                                            dispacth(deleteSingleTodoAction(deleteID))
                                        }} type="submit" class="btn btn-danger" data-bs-dismiss="modal" >Yes</button>
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* deletemodal */}

                        {/* update status */}

                        <div class="modal" id="updateModal" >
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel"> update status</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <select
                                            value={status}
                                            onChange={e => setstatus(e.target.value)}
                                            className='form-select'

                                        >
                                            <option selected value="status"> seletct status</option>
                                            <option value="pending">pending</option>
                                            <option value="inprogress"> inprogress</option>
                                            <option value="completed"> completed</option>
                                        </select>
                                    </div>
                                    <div class="btn-group w-100">
                                        <button onClick={e => {
                                            dispacth(updateStatusAction(editId, status))

                                        }} type="submit" class="btn btn-danger" data-bs-dismiss="modal" >update status</button>
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* update status */}

                    </>

            }


        </>
    )
}
