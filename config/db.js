const mongoose = require('mongoose')

function connection(){
    mongoose.connect(process.env.MONGO_URL).then(() =>{
        console.log("connected to db")
    }
)}

module.exports = connection