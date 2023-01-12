//depend

const mongoose = require("mongoose")
require('dotenv').config()
const express = require("express")
const todos = require("./routes/todoroutes")
const todomodel= require("./models/todomodel")

mongoose.set('strictQuery',true);

//port dec
port = process.env.PORT

//app 
const app = express()

//middleware

app.use(express.json())
app.use((req,res,next)=>{
    next()
})

//routes
app.use("/api",todos)


//db connect
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    try{
    app.listen(port,()=>{
        console.log("listening on port",port)
                        })
         }
    catch(error){

        console.log("Error",error)
    }
})



