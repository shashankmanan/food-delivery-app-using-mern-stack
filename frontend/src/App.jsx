import './App.css'
import NavBar from './components/NavBar'
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import RestaurantView from './pages/RestaurantView'
import CartPage from './pages/CartPage'
import ErrorNotFound from './pages/ErrorNotFound'
import React, { Component } from 'react'
import { Cart } from './components/Cart/Cart'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
    <Cart>
    <div className="App">
      <Routes> 
        <Route exact path="/home" element = {<Home />}/>
        <Route exact path="/" element = {<Home />}/>
        <Route exact path="/restaurants/" element = {<Home />}/>
        <Route exact path="/about" element = {<About />}/>
        <Route exact path="/contact" element = {<Contact />}/>
        <Route exact path="/profile" element = {<Profile />}/>
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/restaurants/menus/:resId" element={<RestaurantView />} />
        <Route path = "*" element = {<ErrorNotFound/>}/> 
        </Routes>
      </div>
      </Cart>
    </div>
    )
  }
}
