const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    "RestaurantId" : {
        type : String ,
        required : true
    } ,
    "ProductName" : {
        type : String ,
        required : true
    } ,
    "Price" : {
        type : Number ,
        required : true
    }
}) 

module.exports = mongoose.model("Cart",CartSchema)