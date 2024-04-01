import React, { Component } from 'react'

export default class RestaurantCard extends Component {
  render = () => {
    const {restaurantId:Id,name,location,rating} = this.props.restaurant
    return(
        <div style ={{border:"1px solid black",margin:"4px",padding:"2px",display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
            <div>
                img
            </div>
            <div>
                <h3>{name}</h3>
                <h4>{location}</h4>
                <h5>{rating}</h5>
                <h3>{ this.props.restaurant.Speciality ? `Bestsellers :${this.props.restaurant.Speciality}` : ""}</h3>
            </div>
            <a href={ `restaurants/menus/${Id}`}><button style={{height:"60px",width:"90px",borderRadius:"10px"}}>Explore</button></a>
        </div>
    )
  }
}
