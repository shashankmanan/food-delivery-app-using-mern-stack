const mongoose = require("mongoose")

const restaurant = new mongoose.Schema(
    {
        "restaurantId" : {
            type : String,
            required : true
        },
        "name" : {
            type : String,
            required : true
        } , 
        "location" : {
            type : String , 
            required: true
        } ,
        "rating" : {
            type : Number , 
            default : 3
        } , 
        "Speciality" : {
            type : String
        } , 
        "createdAt" : {
            type : Date ,
            default : new Date().toISOString()
        }
        
    }
)

module.exports = mongoose.model("Restaurant",restaurant)