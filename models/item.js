const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String ,
        required: true
    } , 
    desc: {
        type: String
    } , 
    price: {
        type: Number , 
        default: 0
    } ,
    createdAt: {
        type: Date , 
        default: Date.now
    }
} , { timestamps: true })

module.exports = mongoose.model('item' , itemSchema)