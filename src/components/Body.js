import Header from "./Header"
import RestaurantCard from "./RestaurantCard";
import resList from './../utils/mockData';

const Body = () => {

  return (
    <div className="">
        <Header />
        <div className="flex p-10">
            {
                resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))
            }

        </div>

    </div>
  )
}

export default Body