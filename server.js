const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const morgan = require("morgan")
const connectToDB = require("./config/db")

app.use(morgan("dev"))
app.use(express.json())

connectToDB()





const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log("Listening on port " + port)
})