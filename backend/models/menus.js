const mongoose = require("mongoose")

const menusSchema = new mongoose.Schema({
        "restaurantId" : {
            type : String ,
            required : true
        } ,
        "name" : {
            type : String ,
            required : true
        } ,
        "menu" : {
            type : [] ,
            default  : []
        }
})

module.exports = mongoose.model("Menu",menusSchema)