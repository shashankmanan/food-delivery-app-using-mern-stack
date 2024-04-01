import axios from "axios"

export const getMenuFromRestaurant = async (resId) => {
    const baseURL = `http://localhost:5000/api/restaurants/menus/${resId}/`
    try {
        const response = await axios.get(baseURL)
        return {"status" : response.status , "data" : response.data}
    } catch(error) {
        console.log("something went wrong... " , error)
    }
}

