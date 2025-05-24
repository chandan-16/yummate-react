import Header from "./Header"
import RestaurantCard from "./RestaurantCard"

const Body = () => {

const resList = [
  {
    name: "Paneer Butter Masala",
    image: "https://example.com/images/paneer-butter-masala.jpg",
    ratings: 4.5,
    price: 220,
    deliveryTime: "30 mins",
    cuisines: ["North Indian", "Punjabi", "Vegetarian"],
    restaurantName: "Spice Hub"
  },
  {
    name: "Veg Biryani",
    image: "https://example.com/images/veg-biryani.jpg",
    ratings: 4.2,
    price: 180,
    deliveryTime: "25 mins",
    cuisines: ["Biryani", "Hyderabadi", "Indian"],
    restaurantName: "Biryani Express"
  },
  {
    name: "Margherita Pizza",
    image: "https://example.com/images/margherita-pizza.jpg",
    ratings: 4.0,
    price: 250,
    deliveryTime: "35 mins",
    cuisines: ["Italian", "Fast Food", "Vegetarian"],
    restaurantName: "Pizza Point"
  },
  {
    name: "Masala Dosa",
    image: "https://example.com/images/masala-dosa.jpg",
    ratings: 4.6,
    price: 120,
    deliveryTime: "20 mins",
    cuisines: ["South Indian", "Breakfast"],
    restaurantName: "Dosa Delight"
  },
  {
    name: "Chole Bhature",
    image: "https://example.com/images/chole-bhature.jpg",
    ratings: 4.3,
    price: 150,
    deliveryTime: "22 mins",
    cuisines: ["North Indian", "Street Food"],
    restaurantName: "Tandoori Zaika"
  },
  {
    name: "Spring Rolls",
    image: "https://example.com/images/spring-rolls.jpg",
    ratings: 4.1,
    price: 110,
    deliveryTime: "15 mins",
    cuisines: ["Chinese", "Snacks"],
    restaurantName: "Chopstick Treats"
  }
];

  return (
    <div className="">
        <Header />
        <div className="flex p-10">
            {
                resList.map((resList) => (
                    <RestaurantCard key={resList.price} resList={resList} />
                ))
            }
            {/* <RestaurantCard resList={resList[0]} /> */}

        </div>

    </div>
  )
}

export default Body