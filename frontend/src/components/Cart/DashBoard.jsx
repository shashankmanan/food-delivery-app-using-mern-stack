import { useEffect, useState } from "react";
import React from 'react'
import {Link} from "react-router-dom"

export default class DashBoard extends React.Component {
    render = () => {
        const {checkout} = this.props
        return(
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-Evenly",alignItems:"center"}}>
                <h3>Your Cart :</h3>
                <h5>Items : {this.props.itemsCount}</h5>
                <h6>Price : {this.props.price}</h6>
                <Link to={checkout == true ? "/checkout" : "/cart"}>
                    <button>{checkout == true ? "Checkout ":"view Cart"} </button>
                </Link>
            </div>
        );
    }
}