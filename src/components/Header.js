import { useState, useEffect } from "react";
// import Logo from "../assets/yoshinoya-japaneese-kitchen-logo-png_seeklogo-370699.png";
import Logo from "../assets/yummate-pink-logo.webp"

import "../components/Header.css"

const Header = () => {

  const [loginBtn, setLoginBtn] = useState(true);

  // If no dependency array => useEffect is called on every render 
  // If the dependency array is empty => useEffect is called on only initial render and just once 
  // if dependency array is [loginBtn] => called every time btnNameReact is updated 
  
  useEffect(() => {
    console.log("useEffect called")
  },[loginBtn])

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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            <div className="ml-16">
                <button onClick={() => setLoginBtn(!loginBtn)} className="login">{ loginBtn ? "Login" : "Logout" }</button>
            </div>
        </div>
    </div>
  )
}

export default Header