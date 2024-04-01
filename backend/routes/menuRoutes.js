const {Router} = require("express")
const menuRouter = Router()
const {getMenuFromRestaurant,createRestaurantMenu} = require("../controllers/menuControllers")

// /api/restaurants/menus/:id GET
// get restaurant menu from the id present above
menuRouter.get("/:id/",getMenuFromRestaurant)

// /api/restaurants/menus/add
// add menu for the first time
menuRouter.post("/add/" , createRestaurantMenu)

module.exports = menuRouter