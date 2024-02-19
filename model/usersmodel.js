const mongoose = require('mongoose');
const {Schema} = mongoose;

const users = new Schema({
    lastname : {
        type: String,
        require: true,
        max: 12,
        min: 2,
    },

    firstname : {
        type: String,
        require: true,
        max: 12,
        min: 2,
    },

    email : {
        type: String,
        require: true,
        max:100,
        min:8,
    },

    password : {
        type: String,
        require: true,
        max:30,
        min:9,

    }
    
})

module.exports = mongoose.model("users",users);