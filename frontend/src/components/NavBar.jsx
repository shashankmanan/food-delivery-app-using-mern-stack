import React from 'react'
import '../styles/NavBar.css'
import logo from '../resources/foodieshash.jpg'
import {Link} from 'react-router-dom'
import { Cart } from './Cart/Cart'
export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="search-bar">
        <span><a href="/"><img src={logo} alt="" className='logo'/></a></span>
        <input type="search" name="" id="" />
        </div>
        <ul>
            <li><Link to={"/"}>ORDER!</Link></li>
              <li><Link to={"/cart"}>CART</Link></li>
            <li><Link to={"/profile"}>PROFILE</Link></li>
        </ul>
    </div>
  )
}
