require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors");
//const { cookie } = require('express-validator');

const authRoute=require("./routes/authentication")

mongoose.connect(process.env.DATABASE,
{useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true}).then(
    ()=>{
        console.log("DB CONNECTED")
    }
)
//middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//My Routes

app.use("/api",authRoute);


//Port
const port = process.env.PORT||8888;

app.listen(port,()=>{
    console.log(`app is running on ${port}`)
});