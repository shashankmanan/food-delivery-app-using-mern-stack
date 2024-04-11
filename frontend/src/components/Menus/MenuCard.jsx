import React, { useState,useContext,useReducer } from "react"
import { CartContext} from "../Cart/Cart"
import {addToCart, removeFromCart} from "../Cart/cartOperations"

export default function MenuCard(props) {
    const {item} = props
    const {name,price} = props.item
    const [quantity,setQuantity] = useState(props.quantity)

    const handleUpdateCart = (isAdded) => {    
        if(isAdded) {
            if(quantity >= 10) {
                alert("Cannot add more than 10 items")
                return;
            }
            setQuantity(quantity + 1)
            addToCart(item)
        } else {
            if(quantity <= 0 ) {
                alert("No items Added")
                return;
            }
            setQuantity(quantity - 1)
            removeFromCart(item)
        }
    }
    return(
        <div style ={{border:"1px solid black",margin:"4px",padding:"2px",display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
            <div>
                img
            </div>
            <div>
                <h3>{name}</h3>
                <h4>{price}</h4>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <button onClick={handleUpdateCart.bind(this,true)}>+</button>
                <span>{quantity}</span>
                <button onClick={handleUpdateCart.bind(this,false)}>-</button>
            </div>
        </div>
    )
}