import { Link } from "react-router-dom";

import RestaurantMenuData from "../data/RestaurantMenuData.json";
import Shimmer from "./Shimmer";

import { getRandomObjects } from "../utils/helper";
import { useParams } from "react-router-dom";

import RestaurantList from '../data/RestaurantList.json'
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenu = () => {

   const { id } = useParams();

  const restaurant = RestaurantList.filter(res => res['web-scraper-order'] === id)[0]

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

  const menu = getRandomObjects(RestaurantMenuData);

    if(menu === null){
        return (
            <Shimmer />
        )
    }

    return(
        <div>
          {/* Back Button */}
          {/* Rendered Restaurant Info from const restaurant*/}
          <div className="px-20  mt-5 pt-10 mx-auto bg-purlpe-600 w-full">
            <Link to="/">
              <button className="px-5 py-2 border text-white bg-gray-800 hover:text-red rounded border-3font-bold hover:bg-blue-700 hover:bg-gray-600 cursor-pointer"><i className="bi bi-arrow-left font-bold text-bold"></i> Back</button>
            </Link>
            <h2 className="font-bold text-3xl py-4">{restaurant.title}</h2>
            <ul className="w-full bg-gradient-to-b p-2 from-slate-50 to=[#DFDFE7] border border p-8 rounded rounded-lg">
              <p><i className="bi bi-star px-2 py-1 rating text-white bg-green-600 rounded-2xl"></i> {restaurant.ratingAndTime}</p>
              <p className="pt-2 text-orange-400 font-bold text-xl"><i className="bi bi-list-task"></i> {restaurant.category}</p>
              <p><i className="bi bi-geo-alt-fill color-violet pt-2 "></i> {restaurant.area}</p>
              <p>MSG</p>
            </ul>
            <h2 className=" font-bold text-center pt-10 pb-6 text-orange-600 text-3xl italic">"From snacks to full meals, our menu brings delicious choices straight to your screen <span className="italic text-xl text-black">- browse, choose, and satisfy your cravings instantly."</span></h2>
          </div>
        {
          menu.map((menuItem) => (
            <RestaurantMenuItem key={menuItem['web-scraper-order']} menuItem={menuItem} />
          ))  
        }
        </div>
    )
};

export default RestaurantMenu;