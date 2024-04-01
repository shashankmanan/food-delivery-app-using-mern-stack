const express = require("express")
const router = express.Router()
const restaurantRouter = require("./restaurantRoutes")
const authenticateRouter = require("./authenticateRoutes")
const cartRouter = require("./cartRoutes")

router.use("/restaurants",restaurantRouter)

router.use("/cart",cartRouter)

router.use("/authenticate",authenticateRouter)

router.get("/" , (request,response) => {
    response.send("this is get request")
})

module.exports = router