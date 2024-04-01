import axios from 'axios'

//GET 
const getAllRestaurants = async () => {
    console.log("getting all restaurants")
    const baseURL = "http://localhost:5000/api/restaurants/"
    try {
        const response = await axios.get(baseURL)
        return ({
          "status" : response.status ,
          "data" : response.data
        })
    } catch(error) {
      console.log("Somethign went wrong")
      console.log(error)
      return ({"status" : 500 , "error" : error});
    }
}

//GET
const getRestaurant = async (restaurantID) => {
  	console.log("Getting a restaurant")
  	const baseURL = `http://localhost:5000/api/restaurants/${restaurantID}/`
  	try {
    	const response = await axios.get(baseURL)
    	return ({
      	"status" : response.status ,
      	"data" : response.data
    	})
	} catch(error) {
  		console.log("Somethign went wrong")
  		console.log(error)
  		return ({"status" : 500 , "error" : error});
	}
}

export {
    getAllRestaurants ,
	  getRestaurant
}

