import React from 'react'
import RestaurantList from '../components/Restaurants/RestaurantList';
import { useParams } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <RestaurantList />
    </div>
  )
}
