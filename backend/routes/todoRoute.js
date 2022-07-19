const express = require('express')
const { getAllTodo, addTodo, updateTodo, deleteAllTodo, deleteSingleTodo, updateStatus } = require('../controller/todoController')
const { logiOnly } = require('../middleware/authMiddleware')


const router = express.Router()


router.route("/").get(logiOnly, getAllTodo)
router.route("/").delete(deleteAllTodo)
router.route("/").post(addTodo)


router.route("/update/:id").put(updateTodo)
router.route("/status/:id").put(updateStatus)


router.route("/delete/:id").delete(deleteSingleTodo)


module.exports = router
