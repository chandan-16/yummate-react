import { useState } from "react";
import Logo from "../assets/Logo-yummate.png";

import "../components/Header.css"

const Header = () => {

  const [loginBtn, setLoginBtn] = useState(true);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="header flex  mx-auto justify-between  text-center shadow shadow-lg">
        <div className="logo-container flex">
            <img className="w-16 h-16" src={Logo} alt="Yummate Logo" />
            <h1 className="text-2xl text-gray-700">YUMMATE</h1>
        </div>
        <div className="searchBox">
          {/* <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for Restaurants and food" autoComplete="off" className="w-100 px-1 py-2 searchInput " name="search" id="search" maxLength="90" value={searchText} /> */}
          {/* Filter the restaurant cards and update the UI  */}
          {/* <button onClick={() => setSearchText()} className="searchButton">Search</button> */}
          {/* <i className="bi bi-search"></i> */}
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