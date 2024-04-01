import React, { useState,useContext,useReducer } from "react"
import { CartContext} from "../Cart/Cart"

export default function MenuCard(props) {
    const {item} = props
    const {name,price} = props.item
    const [quantity,setQuantity] = useState(item.quantity ? item.quantity : 0)
    const Cart = useContext(CartContext)
    const {UpdateCart} = Cart
    /*
    const quantReducer = (state,action) => {
        switch(action) {
            case "add" : 
                return state + 1
            case "sub" : 
                return state - 1 
        }
    }
   // const [quant,updateQuant] = useReducer(quantReducer,0) 
    
    */
    const handleUpdateCart = (isAdded) => {    
        console.log("before " ,Cart)
        if(isAdded) {
            if(quantity >= 10) {
                alert("Cannot add more than 10 items")
                return;
            }
            setQuantity(quantity + 1)
            UpdateCart({type : "ADD_TO_CART" , "item" : item})
        } else {
            if(quantity <= 0 ) {
                alert("No items Added")
                return;
            }
            setQuantity(quantity - 1)
            UpdateCart({type : "REMOVE_FROM_CART" , "item" : item})
        }
        console.log("After ",Cart)
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