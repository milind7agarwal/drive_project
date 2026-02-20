const express = require('express')
const  userRouter =require('./routes/user.routes.js')
const app = express()
const dotenv = require('dotenv')
dotenv.config();
const cookieParser = require('cookie-parser')
const connection = require('./config/db.js')
const indexRouter = require('./routes/index.routes.js')

console.log(process.env.MONGO_URL) 
connection()
app.set('view engine', 'ejs')
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))  
app.use(express.json())  

app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen((3000), ()=> {
    console.log("listening to port 3000")
})