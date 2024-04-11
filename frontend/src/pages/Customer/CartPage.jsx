import React from 'react'
import MenuCard from '../../components/Menus/MenuCard'
import DashBoard from '../../components/Cart/DashBoard'
import {showCart} from '../../components/Cart/cartOperations'

export default function CartPage() {
  const userCart = showCart();
  return (
    <div>
	  <DashBoard checkout = {true}/>
      { 
        userCart.length != 0 ? 
        userCart.map( (i) => <MenuCard item = {i} quantity = {i.quantity ? i.quantity : 0}/>)
        : <div>
            <h1>No Items Added!!</h1>
            <h4>Click <a href = "http://localhost:3000/home">Here</a> to order from your favourite stores</h4>
          </div>
      }
    </div>
  )
}
