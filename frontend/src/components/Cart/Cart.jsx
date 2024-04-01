import { createContext } from "react"
import { useReducer } from "react"

const CartContext = createContext()

const Cart = (props) => {
    const cartReducer = (state,action) => {
        alert("inside cart reducer " + action.type)
        switch(action.type) {
            case "ADD_TO_CART" : {
                const arr = state.userCart
                if(arr.find((i) => i == action.item)) {
                    action.item.quantity = action.item.quantity + 1
                    arr.splice(arr.indexOf(action.item , 1))
                    arr.push(action.item)
                    return { "userId" : 123 , "userCart" : arr}
                }
                action.item.quantity = 1
                console.log(action.item)
                arr.push(action.item)
                return { "userId" : 123 , "userCart" : arr}
            }
            case "REMOVE_FROM_CART" : {
                const arr = state.userCart
                if(arr.find((i) => i == action.item)) {
                    action.item.quantity = action.item.quantity - 1
                    arr.splice(arr.indexOf(action.item , 1))
                    if(action.item.quantity > 0)
                        arr.push(action.item)
                    return { "userId" : 123 , "userCart" : arr}
                }
                arr.splice(arr.indexOf(action.item , 1))
                return { "userId" : 123 , "userCart" : arr}
            }
        }
    }
    const [Cart,UpdateCart] = useReducer(cartReducer,{ "userId" : 123 , "userCart" : []})
    
    return(
        <CartContext.Provider value = {{Cart,UpdateCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export {
    Cart,
    CartContext
}