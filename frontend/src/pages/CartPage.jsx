import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../components/Cart/Cart'
import MenuCard from '../components/Menus/MenuCard'
import DashBoard from '../components/Cart/DashBoard'

export default function CartPage() {
  const {Cart}  = useContext(CartContext)
  const {userCart} = Cart
  console.log(userCart)
  return (
    <div>
	  <DashBoard checkout = {true}/>
      { userCart.map( (i) => <MenuCard item = {i} quantity = {i.quantity ? i.quantity : 0}/>) }
    </div>
  )
}
