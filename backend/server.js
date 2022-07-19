const express = require("express")
require('colors')
require("dotenv").config({ path: './config/.env' })
const cors = require("cors")
const userRoute = require('./routes/userRoute')
const todoRoute = require("./routes/todoRoute")

const db = require("./config/db")




db()

const app = express()


app.use(cors())

app.use(express.json())


app.use("/api/user", userRoute)
app.use("/api/todo", todoRoute)


app.listen(process.env.PORT || 4800, (e) => console.log(`server running on prot http://localhost:${process.env.PORT || 4800}`.bgBlue))



