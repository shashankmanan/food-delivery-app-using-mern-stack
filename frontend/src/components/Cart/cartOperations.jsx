

const addToCart = (item) => {
    const userId = 111
    const {Cart} = JSON.parse(localStorage.getItem(userId))
    const alreadyAddedItem = Cart.find( (i) => i.name === item.name)
    if(alreadyAddedItem) {
        console.log(alreadyAddedItem)
        const {quantity} = alreadyAddedItem
        Cart.splice(Cart.indexOf(alreadyAddedItem),1)
        Cart.push({ "name" : item.name, 'price' : item.price , "quantity" : quantity + 1})
        localStorage.setItem(userId , JSON.stringify({"Cart" : Cart}))
        console.log(localStorage.getItem(userId))
        return
    }
    Cart.push({ "name" : item.name , "quantity" : 1})
    localStorage.setItem(userId , JSON.stringify({"Cart" : Cart}))
}

const showCart = () => {
    const userId = 111;
    const {Cart} = JSON.parse(localStorage.getItem(userId))
    return Cart
}

const removeFromCart = (item) => {
    const userId = 111
    const {Cart} = JSON.parse(localStorage.getItem(userId))
    const alreadyAddedItem = Cart.find( (i) => i.name === item.name)
    if(alreadyAddedItem) {
        console.log(alreadyAddedItem)
        const {quantity} = alreadyAddedItem
        if(quantity == 1) {
            Cart.splice(Cart.indexOf(alreadyAddedItem),1)            
            localStorage.setItem(userId , JSON.stringify({"Cart" : Cart}))
            return
        }
        Cart.splice(Cart.indexOf(alreadyAddedItem),1)
        Cart.push({ "name" : item.name, 'price' : item.price , "quantity" : quantity - 1})
        localStorage.setItem(userId , JSON.stringify({"Cart" : Cart}))
        console.log(localStorage.getItem(userId))
        return
    }
    alert("Item not added")
    localStorage.setItem(userId , JSON.stringify({"Cart" : Cart}))
}

module.exports = {
    addToCart ,
    removeFromCart, 
    showCart
}