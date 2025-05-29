import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantList from "../data/RestaurantList.json";
import "../components/Body.css";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(RestaurantList);


  const [searchText, setSearchText] = useState("");

  // Conditional Rendering
  if (listOfRestaurants === 0) {
    return <Shimmer />;
  }

  return (
    <div className="px-5 py-2 main-container">
      <Header />
      <h1 className="pt-10 font-extrabold text-3xl text-gray-500 text-center">
        Restaurants with online{" "}
        <span className="pt-10 font-extrabold text-3xl text-orange-500">
          Food Delivery In Pune
        </span>
      </h1>

      <div className="filter mx-auto w-115 pt-3">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for restaurants and food"
          className="w-100 py-2 pl-2 searchBox"
          value={searchText}
        />
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
            setListOfRestaurants(filteredList)
          }}
          className="cursor-pointer w-10 text-gray-700 bg-gray-500 searchIcon"
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
      <div className="flex p-10 w-full p-4 flex-wrap justify-center">
        {listOfRestaurants.map((restaurant) => (
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
