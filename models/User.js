const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    type : {
        type : String,
        default : "Normal",
        enum : ["Normal" , "OutGoing Handler" , "Incoming Handler" , "Admin"]
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = User = mongoose.model('user' , UserSchema);