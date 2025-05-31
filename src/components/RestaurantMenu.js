import { useEffect, useState } from "react";
import RestaurantMenuData from "../data/RestaurantMenuData.json";
import Shimmer from "./Shimmer";
import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantMenu = () => {

  // If no dependency array => useEffect is called on every render 
  // If the dependency array is empty => useEffect is called on only initial render and just once 
  // if dependency array is [loginBtn] => called every time btnNameReact is updated     

    // useEffect(() => {
    //     fetchMenu();
    // },)

    // const fetchMenu = async () => {
    //     const data = await fetch(RestaurantMenuData);
    //     const json = await data.json()
    //     console.log("json data", json);
    // }

    const [restaurantInfo, setRestaurantInfo] = useState(RestaurantMenuData)

    console.log("restaurantmenu data", restaurantInfo);

    if(restaurantInfo === null){
        return (
            <Shimmer />
        )
    }

    console.log(restaurantInfo.name)

    return(
        <div>
        {
          restaurantInfo.map((restaurantList) => (
            <RestaurantMenuList key={restaurantList['web-scraper-order']} restaurantList={restaurantList} />
          ))  
        }
        </div>
    )
};

export default RestaurantMenu;