import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { getAllRestaurants,getRestaurant } from "../../API/RestaurantsApi"
import { useParams } from "react-router-dom"


export default function RestaurantList() {
	const [allRestaurantList , setAllRestaurantList] = useState([])
	const [errorMessage , setErrorMessage] = useState("")
	const {resId} = useParams()
	console.log(`id is : ${resId}`)
	useEffect(
		() => {
			APIHandler()
		} , []
	)
	const APIHandler = async() => {
		if(resId) {
			const restItem = await getRestaurant(resId)
			setAllRestaurantList([restItem.data])
		} 
		else {
			const tempRestList = await getAllRestaurants()
			if(tempRestList.status == 200) {
				setAllRestaurantList(tempRestList.data)
				setErrorMessage("")
			}
			else {
				console.log("Something went wrong... " , tempRestList.error)
				setErrorMessage("something went wrong....")
			}
		}
	}
	return (
		<div>
			{
			allRestaurantList.map( 
				(item) => <RestaurantCard restaurant = {item}/>
			) 
			}
			<h2>{errorMessage}</h2>
		</div>
	)
}

