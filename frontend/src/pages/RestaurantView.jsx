import { Cart } from "../components/Cart/Cart"
import MenuList from "../components/Menus/MenuList"
import React from "react"

export default class RestaurantView extends React.Component {
    render = () => {
        return(
            <div>
                <MenuList />
            </div>
        )
    }
}

