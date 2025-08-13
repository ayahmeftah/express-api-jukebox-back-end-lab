const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const morgan = require("morgan")
const connectToDB = require("./config/db")

const tracksRoutes = require('./routes/tracksRoutes')

connectToDB()

app.use(cors({origin: 'http://localhost:5173'}))
app.use(morgan("dev"))
app.use(express.json())

app.use('/tracks', tracksRoutes)


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})