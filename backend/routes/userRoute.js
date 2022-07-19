const express = require('express')
const { login } = require('../controller/authController')
const { getalluser, adduser, deletuser } = require('../controller/userController')
const router = express.Router()


router.route('/').get(getalluser)
router.route("/signup").post(adduser)
router.route("/delete").delete(deletuser)
router.route("/login").post(login)

module.exports = router