import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"


dotenv.config()

const App=express()
App.use(bodyParser.json())

const port=process.env.PORT

// Cnfig port running

App.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

export default App