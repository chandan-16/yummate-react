import Header from "./Header"
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantList from "../data/RestaurantList.json";
// import RestaurantMenuData from "../data/RestaurantMenuData";
// import { restaurants } from "../utils/constants";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(RestaurantList);


  // Conditional Rendering 
  if(listOfRestaurants === 0){
    return (<Shimmer />)
  }

  return (
    <div className="px-5 py-2">
        <Header />

         
        <div className="filter">
          <h1 className="">Restaurants with online food delivery in Pune</h1>
        </div>
        <div className="flex p-10 w-full p-4 flex-wrap justify-center">
          {
            listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant["imageUrl-src"]} restaurant={restaurant} />
            ))
          }
        </div>
    </div>
  )
}

export default Body