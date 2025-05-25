const resList = [{
    id: 1,
    name: "Burger King",
    price: 150,
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png",
    cuisines: ["Fast Food", "Burgers"],
    address: "FC Road, Pune, Maharashtra",
    deliveryTime: 30
  },
  {
    id: 2,
    name: "Domino's Pizza",
    price: 300,
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png",
    cuisines: ["Pizza", "Italian"],
    address: "JM Road, Pune, Maharashtra",
    deliveryTime: 35
  },
  {
    id: 3,
    name: "Subway",
    price: 250,
    rating: 4.0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Subway_2016_logo.svg/1200px-Subway_2016_logo.svg.png",
    cuisines: ["Sandwiches", "Healthy"],
    address: "Koregaon Park, Pune, Maharashtra",
    deliveryTime: 25
  },
  {
    id: 4,
    name: "KFC",
    price: 200,
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/KFC_logo.svg/1200px-KFC_logo.svg.png",
    cuisines: ["Fast Food", "Chicken"],
    address: "MG Road, Pune, Maharashtra",
    deliveryTime: 30
  },
  {
    id: 5,
    name: "McDonald's",
    price: 180,
    rating: 4.1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/McDonald's_2020_logo.svg/1200px-McDonald's_2020_logo.svg.png",
    cuisines: ["Fast Food", "Burgers"],
    address: "Baner, Pune, Maharashtra",
    deliveryTime: 28
  },
  {
    id: 6,
    name: "Pizza Hut",
    price: 320,
    rating: 4.4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Pizza_Hut_logo.svg/1200px-Pizza_Hut_logo.svg.png",
    cuisines: ["Pizza", "Italian"],
    address: "Viman Nagar, Pune, Maharashtra",
    deliveryTime: 35
  },
  {
    id: 7,
    name: "Haldiram's",
    price: 120,
    rating: 4.0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Haldiram's_logo.svg/1200px-Haldiram's_logo.svg.png",
    cuisines: ["Indian", "Sweets"],
    address: "Camp, Pune, Maharashtra",
    deliveryTime: 20
  },
  {
    id: 8,
    name: "Bikanervala",
    price: 140,
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bikanervala_logo.svg/1200px-Bikanervala_logo.svg.png",
    cuisines: ["Indian", "Snacks"],
    address: "Kothrud, Pune, Maharashtra",
    deliveryTime: 22
  },
  {
    id: 9,
    name: "Wow! Momo",
    price: 160,
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Wow!_Momo_logo.svg/1200px-Wow!_Momo_logo.svg.png",
    cuisines: ["Momos", "Fast Food"],
    address: "Aundh, Pune, Maharashtra",
    deliveryTime: 25
  },
  {
    id: 10,
    name: "Faasos",
    price: 190,
    rating: 4.1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Faasos_logo.svg/1200px-Faasos_logo.svg.png",
    cuisines: ["Wraps", "Indian"],
    address: "Hinjewadi, Pune, Maharashtra",
    deliveryTime: 30
  },
  {
    id: 11,
    name: "Box8",
    price: 220,
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Box8_logo.svg/1200px-Box8_logo.svg.png",
    cuisines: ["Indian", "Fusion"],
    address: "Wakad, Pune, Maharashtra",
    deliveryTime: 32
  },
  {
    id: 12,
    name: "Behrouz Biryani",
    price: 350,
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Behrouz_Biryani_logo.svg/1200px-Behrouz_Biryani_logo.svg.png",
    cuisines: ["Biryani", "Mughlai"],
    address: "Kharadi, Pune, Maharashtra",
    deliveryTime: 40
  },
  {
    id: 13,
    name: "FreshMenu",
    price: 270,
    rating: 4.0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/FreshMenu_logo.svg/1200px-FreshMenu_logo.svg.png",
    cuisines: ["Continental", "Healthy"],
    address: "Hadapsar, Pune, Maharashtra",
    deliveryTime: 30
  },
  {
    id: 14,
    name: "Sweet Truth",
    price: 150,
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Sweet_Truth_logo.svg/1200px-Sweet_Truth_logo.svg.png",
    cuisines: ["Desserts", "Bakery"],
    address: "Bibvewadi, Pune, Maharashtra",
    deliveryTime: 25
  },
  {
    id: 15,
    name: "Oven Story Pizza",
    price: 290,
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Oven_Story_Pizza_logo.svg/1200px-Oven_Story_Pizza_logo.svg.png",
    cuisines: ["Pizza", "Italian"],
    address: "Pimple Saudagar, Pune, Maharashtra",
    deliveryTime: 35
  },
  {
    id: 16,
    name: "The Belgian Waffle Co.",
    price: 180,
    rating: 4.4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/The_Belgian_Waffle_Co_logo.svg/1200px-The_Belgian_Waffle_Co_logo.svg.png",
    cuisines: ["Desserts", "Waffles"],
    address: "Deccan, Pune, Maharashtra",
    deliveryTime: 20
  },
  {
    id: 17,
    name: "Rolls Mania",
    price: 160,
    rating: 4.1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rolls_Mania_logo.svg/1200px-Rolls_Mania_logo.svg.png",
    cuisines: ["Rolls", "Fast Food"],
    address: "Sinhagad Road, Pune, Maharashtra",
    deliveryTime: 28
  },
  {
    id: 18,
    name: "The Good Bowl",
    price: 240,
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/The_Good_Bowl_logo.svg/1200px-The_Good_Bowl_logo.svg.png",
    cuisines: ["Healthy", "Bowls"],
    address: "Kalyani Nagar, Pune, Maharashtra",
    deliveryTime: 30
  },
  {
    id: 19,
    name: "Biryani Blues",
    price: 300,
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Biryani_Blues_logo.svg/1200px-Biryani_Blues_logo.svg.png",
    cuisines: ["Biryani", "Mughlai"],
    address: "Vishrantwadi, Pune, Maharashtra",
    deliveryTime: 35
  },
  {
    id: 20,
    name: "Chai Point",
    price: 100,
    rating: 4.0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Chai_Point_logo.svg/1200px-Chai_Point_logo.svg.png",
    cuisines: ["Beverages", "Snacks"],
    address: "Shivaji Nagar, Pune, Maharashtra",
    deliveryTime: 20
  }];

  export default resList;