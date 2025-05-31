import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/yoshinoya-japaneese-kitchen-logo-png_seeklogo-370699.png";
import Logo from "../assets/yummate-pink-logo.webp"

import "../components/Header.css"

const Header = () => {

  const [loginBtn, setLoginBtn] = useState(true);

  return (
    <div className="header w-full px-20 flex  mx-auto justify-between  text-center shadow shadow-lg">
        <div className="logo-container flex">
            <img className="w-16 h-16 logo pb-1" src={Logo} alt="Yummate Logo" />
            <h1 className="text-2xl text-gray-700 logoText">Yummate</h1>
        </div>
        <div className="searchBox">

        </div>
        <div className="nav-items px-2  py-2 flex ">
            <ul className="flex justify-between w-70 pageList">
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
                  <Link to="/cart">Cart</Link>
                </li>
            </ul>
            <div className="ml-16">
                <button onClick={() => setLoginBtn(!loginBtn)} className="login">{ loginBtn ? "Login" : "Logout" }</button>
            </div>
        </div>
    </div>
  )
}

export default Header