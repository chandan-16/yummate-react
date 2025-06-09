import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantList from "../data/RestaurantList.json";
import "../components/Body.css";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(RestaurantList);
  const [filteredRestaurent, setFilteredRestaurant] = useState(listOfRestaurants);

  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    const filteredList = listOfRestaurants.filter((res) => res.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    setFilteredRestaurant(filteredList)
  },[searchText]);

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1 className="px-20 text-3xl text-center py-10">Looks like you're offline!! Please check your Internet Connection</h1>

    // Conditional Rendering
  if (listOfRestaurants === 0) {
    return <Shimmer />;
  }

  return (
    <div className="px-4 md:px-8 lg:px-20 pt-32 pb-20 pt-2 main-container max-w-screen-xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl pt-6 font-extrabold text-center text-gray-800 mb-6">
        Restaurants with online{" "}
        <span className="block text-orange-500 text-3xl sm:text-4xl md:text-5xl mt-2">
          Food Delivery In Pune
        </span>
      </h1> 

      <div className="w-full max-w-2xl mx-auto mt-6 mb-10">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for restaurants and food"
          className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={searchText}
        />

        {/* <input type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} /> */}
      </div>
      <div className="flex flex-wrap justify-center gap-6">
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
