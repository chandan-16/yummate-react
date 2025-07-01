import { useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/free-food-delivery.png"
// import useOnlineStatus from "../utils/useOnlineStatus";
import "../components/Header.css"

import { useSelector } from "react-redux";

const Header = () => {

  const cartItem = useSelector(state => state.cartState.cartList);

  const [loginBtn, setLoginBtn] = useState(true);

  // const onLineStatus = useOnlineStatus();

  // const { loggedInUser } = useContext(cartContext);
  // console.log(loggedInUser);


  return (
    <div className="header w-full px-6 md:px-10 lg:px-20 flex flex-col md:flex-row py-2 items-center justify-between text-center shadow shadow-lg fixed top-0 left-0 bg-white z-50">
      <div className="logo-container flex items-center gap-2 mb-4 md:mb-0">
        <img className="w-7 h-7 md:w-16 md:h-14 rounded-3xl" src={Logo} alt="Yummate Logo" />
        <h1 className="text-2xl md:text-2xl font-semibold text-gray-700">Yummate</h1>
      </div>

      <div className="nav-items w-full md:w-auto">
        <ul className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-6 text-sm md:text-base">
          <li><Link to="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600">Contact</Link></li>
          <li><Link to="/grocerry" className="hover:text-orange-600">Grocery</Link></li>
          <li className="relative">
            <Link to="/cart" className="hover:text-orange-600">
              Cart <span className="ml-1 text-orange-600 font-bold">({cartItem.length})</span>
            </Link>
          </li>
          <li>
            <button onClick={() => setLoginBtn(!loginBtn)} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-lg transition-all duration-300">
              {loginBtn ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>    
  )
}

export default Header