import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import router from "./routes"
import mongoose from "mongoose"


dotenv.config()

const App=express()
App.use(bodyParser.json())
App.use("/job",router)

const port=process.env.PORT
const db=process.env.DATABASE

// Cnfig port running

App.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

// Config database

mongoose.connect(db).then(()=>{
    console.log("Database successfuly connected !!!!!!")
}).catch((error)=>{
    console.log(`The error is ${error}`)
})

export default App