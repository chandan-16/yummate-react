const RestaurantMenuList = ({restaurantList}) => {

    const { name, price, rating, description,  } = restaurantList;

  return (
    <div>
        <img src={restaurantList["image-src"]} alt="List Items" />
        <h1>{name}</h1>
        <p>{price}</p>
        <p>{rating}</p>
        <p>{description}</p>
        <h2>Menu</h2>

            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Code</li>
                <li></li>
                <li></li>
            </ul>        
    </div>
  )
}

export default RestaurantMenuList