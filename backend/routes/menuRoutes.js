const {Router} = require("express")
const menuRouter = Router()
const {getMenuFromRestaurant,createRestaurantMenu,addMenuItem} = require("../controllers/menuControllers")

// /api/restaurants/menus/:id GET
// get restaurant menu from the id present above
menuRouter.get("/:id/",getMenuFromRestaurant)

// /api/restaurants/menus/add
// add menu for the first time default of 
menuRouter.post("/create/" , createRestaurantMenu)

// /api/restaurants/menus/:id/add
// add items to menu
menuRouter.put("/add/:resId", addMenuItem)

module.exports = menuRouter