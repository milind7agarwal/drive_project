const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required:true,
        trim:true,
        lowercase: true,
        unique: true,
        minlength: [3, 'Usernme must not exceed more than 3 chracter'] 
    },
    email : {
        type: String,
        required:true,
        trim:true,
        lowercase: true,
        unique: true,
        minlength: [13, 'Email must not exceed more than 13 chracter'] 
    },
    password : {
        type: String,
        required:true,
        trim:true,
        unique: true,
        minlength: [5, 'password must not exceed more than 5 chracter'] 
    },
})

const user = mongoose.model('user', userSchema)

module.exports = user