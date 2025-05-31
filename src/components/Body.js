import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantList from "../data/RestaurantList.json";
import "../components/Body.css";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(RestaurantList);
  const [filteredRestaurent, setFilteredRestaurant] = useState(listOfRestaurants);

  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    const filteredList = listOfRestaurants.filter((res) => res.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    setFilteredRestaurant(filteredList)
  },[searchText])

    // Conditional Rendering
  if (listOfRestaurants === 0) {
    return <Shimmer />;
  }

  return (
    <div className="px-5 py-2 main-container">
      <h1 className="pt-8 font-extrabold text-3xl text-black-500 text-center">
        Restaurants with online{" "}
        <span className="pt-10 font-extrabold text-5xl text-[#F14060]">
          Food Delivery In Pune
        </span>
      </h1>

      <div className="filter mx-auto w-115 pt-3">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for restaurants and food"
          className="w-100 py-3 pl-2 searchBox"
          value={searchText}
        />
      </div>
      <div className="flex p-10 w-full p-4 flex-wrap justify-center">
        {filteredRestaurent.map((restaurant) => (
          <RestaurantCard
            key={restaurant['web-scraper-order']}
            restaurant={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
