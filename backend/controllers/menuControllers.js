const menuModel = require("../models/menus")
 
// /api/restaurants/menus/:id GET
// returns list of menu from the restaurant
const getMenuFromRestaurant = async (request,response) => {
    const {id} = request.params
    try {
        const menu = await menuModel.findOne({restaurantId : id})
        if(menu)
            response.json(menu)
        else
            response.json({"ERROR 404" : "NO RESTAURANT FOUND"}) 
    }
    catch(error) {
        response.json({"Something went wrong..." : error})
        return
    }
}
 
// /api/restaurants/menus/create POST
// add menu for the first time
// request.parameters = { resId : Number , name : String }
const createRestaurantMenu = async (request,response) => {
    try {
        console.log(request.body)
        const {resId , name} = request.body
        await menuModel.create({"restaurantId" : resId , "name" : name , menu : []})
    }
    catch(error) {
        console.log(error)
        response.json({"status" : 500 ,"Something went wrong..." : error})
        return
    }
    response.json({"Succesfully inserted!" : "inserted"}) 
}
 
// /api/restaurants/menus/add/:id PUT
// add single menu item
const addMenuItem = async (request,response) => {
    try {
        const {resId} = request.params
        const {name , price} = request.body
        const { menu } = await menuModel.findOne({restaurantId : `${resId}`})
        console.log(menu.push({
            "itemId" : 1 ,
            "name" : name , 
            "price" : price  
        }) )
        const update = { "menu" : menu}
        await menuModel.findOneAndUpdate({restaurantId : resId} , update)
        response.json({"Succesfully Updated" : "update"})
    }
    catch(error) {
        response.json({"status" : 500 , "Something went wrong" : error})
    }
}
 
module.exports = {
    getMenuFromRestaurant ,
    createRestaurantMenu ,
    addMenuItem
}
