const {Router} = require('express')
const cartRouter = Router()
const {addToCart} = require('../controllers/cartController')

// /api/cart/ GET
// get all items from cart
cartRouter.get("/" , addToCart)

// /api/cart/add/ POST
// add an item to the cart
cartRouter.put("/add/" , addToCart)

module.exports = cartRouter