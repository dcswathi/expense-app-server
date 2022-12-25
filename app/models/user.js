const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        // minLength: 6,
        // maxLength: 64,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                return isEmail(value)
            },
            message: function() {
                return 'invalid email format'
            }
        }
    },
    password: {
        type: String,
        required: true,
        // minLength: 8,
        // maxLength: 128
    },
    // occupation: {
    //     type: String
    // },
    // pic: {
    //     type: Image
    // }
}, { timestamps : true })

const User = mongoose.model('User', userSchema)

module.exports = User