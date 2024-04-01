
const mongoose = require('mongoose')

const UsercartSchema = new mongoose.Schema({
    "userId" : {
        type : String ,
        default : "test"
    } , 
    "Cart" : {
        type : [] ,
        default : []
    }
})

module.exports = mongoose.model("UserCart",UsercartSchema)