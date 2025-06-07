import { useState} from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/yoshinoya-japaneese-kitchen-logo-png_seeklogo-370699.png";
import Logo from "../assets/free-food-delivery.webp"
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
    <div className="header w-full px-20 flex  mx-auto justify-between  text-center shadow shadow-lg">
        <div className="logo-container flex">
            <img className="w-26 h-20 logo pb-1 rounded-3xl" src={Logo} alt="Yummate Logo" />
            <h1 className="text-3xl text-gray-700 logoText">Yummate</h1>
        </div>

        <div className="nav-items px-2 align-center py-2 flex ">
            <ul className="flex justify-between w-120 pageList justify-center items-center mr-20">
                
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link> 
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/grocerry">Grocery</Link>
                </li>                
                <li className="flex justify-between">
                  <Link to="/cart">Cart <span>{cartItem.length}</span></Link>
                </li>
                <li>
                  {/* {onLineStatus ? <p className="text-white bg-green-700 rounded-lg py-2 px-4 flex "><i className="bi bi-hand-thumbs-up pr-1"></i> Online</p> : <p className="flex  text-white bg-red-700 rounded-lg py-2 px-4"><i className="bi bi-hand-thumbs-down pr-1"></i> Offline</p> } */}
                </li>
                <button onClick={() => setLoginBtn(!loginBtn)} className="login">{ loginBtn ? "Login" : "Logout" }</button>
                <li>
                  {/* { loggedInUser } */}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header