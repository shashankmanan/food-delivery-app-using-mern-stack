import React, { useContext } from "react"
import MenuCard from "./MenuCard" 
import DashBoard from "../Cart/DashBoard"
import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import { getMenuFromRestaurant } from "../../API/MenuApi"
import { showCart } from "../Cart/cartOperations"

export default function MenuList() {
    const [totalItems,setTotalItems] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)
    const [menu,setMenu] = useState([])
    const [restName,setRestName] = useState("")
    const {resId} = useParams()    

    useEffect(
        () => {
            triggerAPI() 
        } , []
    )

    const triggerAPI = async () => {
        const menuItem = await getMenuFromRestaurant(resId)
        setMenu(menuItem.data.menu)
        setRestName(menuItem.data.name)
    }

    const updateItemsQuantFromCart = (item) => {
        const Cart = showCart()
        const itemExistingInCart = Cart.find( (i) => i.name == item.name)
        console.log(itemExistingInCart)
        if(itemExistingInCart)
            return itemExistingInCart.quantity
        return 0
    }

    return (
        <div>
            <h1>VIEWING FOODS IN {restName}</h1>
            <DashBoard itemsCount = {totalItems} price={totalPrice} checkout={false}/>
            {     
                menu.map((item) => {
                    const quant = updateItemsQuantFromCart(item)
                    console.log(quant)
                    return (
                        <>
                            <MenuCard item = {item} quantity = {quant}/>              
                        </>
                        
                    )
                })
            }   

         </div>
    )
}
