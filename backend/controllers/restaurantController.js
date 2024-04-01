const restaurantModel = require("../models/restaurant")

const getAllRestaurants = async (request,response) => {
    const allRestaurantsList = await restaurantModel.find()
    console.log(allRestaurantsList)
    response.json(allRestaurantsList)
}

const getRestaurant = (request,response) => {
    console.log("fetching a restaurant")
    const {id} = request.params
    const restItem = Restaurants.find((i) => i.Id == id)
    if(restItem)
        response.status(200).json(restItem)
    else
        response.status(404).json({"NO ITEM FOUND" : ""})
}

const createNewRestaurant = async (request,response) => {
    const generateRandomID = (name,location) => {
        console.log(name,location)
        const firstNum = parseInt((Math.random() * 1000) ^ (Math.random() * 1000))
        const alpha = "abcdefghijklmnopqrstuvzabcdefghijklmnopqrstuvzabcdefghijklmnopqrstuvzabcdefghijklmnopqrstuvzabcdefghijklmnopqrstuvz" 
        firstStr = `${alpha[parseInt(Math.random() * 10)]}${alpha[parseInt(Math.random() * 10)]}${alpha[parseInt(Math.random() * 10)]}${alpha[parseInt(Math.random() * 10)]}`
        secondStr = `${alpha[parseInt(Math.random() * 10)]}${alpha[parseInt(Math.random() * 10)]}${alpha[parseInt(Math.random() * 10)]}${alpha[parseInt(Math.random() * 10)]}`
        const secondNum = new Date()
        const thirdNum = parseInt((Math.random() * 1000) ^ (Math.random() * 1000)) 
        const num = parseInt(Math.random() * 10)
        const nameStr = name.substring(0,3) ? name.substring(0,3) : alpha.substring(num , num + 3)
        const locationStr = location.substring(0,3) ? location.substring(0,3) : alpha.substring(num , num + 3)
        const randId = `${firstNum}${firstStr}${nameStr}${secondNum.getDate()}${secondNum.getUTCMonth()}${secondNum.getUTCHours()}${locationStr}${secondStr}${thirdNum}`
        return(randId)
    }
    const {name,location} = request.body
    console.log("Inserting " , name, location)
    try {
        const insertObj = {
            "restaurantId" : generateRandomID(name,location) ,
            "name" : name ,
            "location" : location ,
            "Speciality" : request.body.Speciality ? request.body.Speciality : "" ,
        }
        console.log(insertObj)
        await restaurantModel.create(insertObj)
    }
    catch(error) {
        console.log(error)
        response.json({"Something went wrong..." : error})
        return
    }
    response.json({"successfully inserted" : request.body})
}

module.exports = {
    getAllRestaurants , 
    getRestaurant ,
    createNewRestaurant
}