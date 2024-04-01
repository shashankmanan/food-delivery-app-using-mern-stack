const express = require('express')
const app = express()
const router = require("./routes/index")
const CORS = require('cors')
const bodyParser = require('body-parser')
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const {PORT,DBURL} = process.env

app.use(bodyParser.json())
app.use(CORS())
app.use("/api",router)



const start = async () => {
    try {
        const conn = await mongoose.connect(DBURL)
        app.listen(PORT, () => {
            console.log("listening to port ",PORT);
        })
        if(conn)
            console.log("Successfully connected to DB");

    } catch(error) {
        console.log(error)
    }
}

start()

