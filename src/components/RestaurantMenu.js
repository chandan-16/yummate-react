import { useEffect, useState } from "react";
import RestaurantMenuData from "../data/RestaurantMenuData.json";
import Shimmer from "./Shimmer";
import RestaurantMenuList from "./RestaurantMenuList";
import { getRandomObjects } from "../utils/helper";
import { useParams } from "react-router-dom";

import RestaurantList from '../data/RestaurantList.json'



const RestaurantMenu = () => {

   const { id } = useParams();

   const restaurant = RestaurantList.filter(res => res['web-scraper-order'] === id)[0]
console.log("@@@id",id)
  console.log("@@@restaurant",restaurant)
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

    // const [restaurantInfo, setRestaurantInfo] = useState([])

      const menu = getRandomObjects(RestaurantMenuData)

    // const getRandom20 = () => {
    //   const shuffled = [...RestaurantMenuData].sort(() => 0.5 - Math.random());
    //   setRestaurantInfo(shuffled.slice(0, 20));
    // };

  // useEffect(() => {
  // getRandom20()    
  // },[])

    console.log("restaurantmenu data", menu);

    if(menu === null){
        return (
            <Shimmer />
        )
    }

    console.log(menu.name)

    return(
        <div>
        {
          menu.map((restaurantList) => (
            <RestaurantMenuList key={restaurantList['web-scraper-order']} restaurantList={restaurantList} />
          ))  
        }
        </div>
    )
};

export default RestaurantMenu;