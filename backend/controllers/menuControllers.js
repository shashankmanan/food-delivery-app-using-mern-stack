const menuModel = require("../models/menus")

// /api/restaurants/menus/:id GET
// returns list of menu from the restaurant
const getMenuFromRestaurant = async (request,response) => {
    const {id} = request.params
    try {
        const menu = await menuModel.findOne({restaurantId : id})
        console.log(menu)
        response.json(menu) 
    }
    catch(error) {
        response.json({"Something went wrong..." : error})
        return
    }
}

// /api/restaurants/menus/add POST
// add menu for the first time
const createRestaurantMenu = async (request,response) => {
    try {
        await menuModel.create(request.body)
    }
    catch(error) {
        console.log(error)
        response.json({"Something went wrong..." : error})
        return
    }
    response.json({"Succesfully inserted!" : "inserted"}) 
}

module.exports = {
    getMenuFromRestaurant ,
    createRestaurantMenu
}