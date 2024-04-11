const express = require("express")
const restaurantRouter = express.Router()
const {getAllRestaurants,getRestaurant,createNewRestaurant} = require("../controllers/restaurantController")
const menuRouter = require("./menuRoutes")

restaurantRouter.use("/menus/" , menuRouter)

// /api/restaurants/  GET 
// returns all restaurants
restaurantRouter.get("/",getAllRestaurants)

// /api/restaurants/:id  GET 
// return one restraurant by id
restaurantRouter.get("/:id/" , getRestaurant)

// /api/restaurants/add POST
// adds new restaurant data sent via request body
restaurantRouter.post("/create/", createNewRestaurant)

module.exports = restaurantRouter