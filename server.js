import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/User-Apis.js'
import { productApp } from './APIs/Product-Api.js'
import cookieParser from 'cookie-parser'


const app = exp()
const port = 4000
app.use(exp.json())

// connect to db server
async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/anuragdb2')
        console.log("DB connected")
        app.listen(port,()=>console.log("Server is listening on 4000"))
    }
    catch(err){
        console.log("Err:",err)
    }
}

connectDB()
app.use(cookieParser()) 
app.use('/User-Api', userApp)
app.use('/Product-Api', productApp)  
