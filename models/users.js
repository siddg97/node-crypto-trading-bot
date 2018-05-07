var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    apikey: {
        type: String,
        required: true
    },
    apisecret: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tradelimit: {
        type: Number,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

var Users = module.exports = mongoose.model('Users', userSchema)

//Get