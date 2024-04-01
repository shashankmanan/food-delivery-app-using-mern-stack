const CartModel = require("../models/UserCart")

const addToCart = async (request,response) => {
    try {
        const id = "test"
        const user = await CartModel.findOne({userId : id})
        console.log(user)
        const {Cart,userId} = user
        const arr = Cart.push(request.body)
        console.log(Cart)
        CartModel.updateOne({userId : userId} , {Cart : arr})
        checkIfAnItemExists()
    }
    catch(error) {
        console.log(error)
        response.json({ " Something went Wrong..." : error})
        return
    }
    response.json({"Item successfully added to cart" : ""})
}

const checkIfAnItemExists= async (objectName) => {
    const id = "test"
    const item = await CartModel.findOne({userId : id})
    const {Cart} = item
    console.log(Cart)
}


module.exports = {
    addToCart
}