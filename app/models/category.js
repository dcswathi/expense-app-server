const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    deletedAt: {
        type: Date,
        requied: true,
        default: null,
    }
}, { timestamps : true })

const Category = mongoose.model('Category', categorySchema)

module.exports = Category