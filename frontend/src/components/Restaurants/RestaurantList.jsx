import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { getAllRestaurants,getRestaurant } from "../../API/RestaurantsApi"
import { useParams } from "react-router-dom"


export default function RestaurantList() {
	const [allRestaurantList , setAllRestaurantList] = useState([])
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
			}
			else {
				console.log("Something went wrong... " , tempRestList.error)
			}
		}
	}
	return (
		<div>
			{allRestaurantList.map( (item) => <RestaurantCard restaurant = {item}/>)}
		</div>
	)
}

