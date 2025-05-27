import Logo from "../assets/yummate-logo-final.png";

import "../components/Header.css"

const Header = () => {
  return (
    <div className="header flex  mx-auto justify-between  text-center shadow shadow-lg">
        <div className="logo-container flex">
            <img className="w-20 h-20" src={Logo} alt="Yummate Logo" />
            <h1 className="text-2xl">YUMMATE</h1>
        </div>
        <div>
          <input className="w-100 px-1 py-2 searchInput " type="text" placeholder="Search for Restaurants and food"  maxLength="90"/>
          <button className="searchButton">Search</button>
          {/* <i className="bi bi-search"></i> */}
        </div>
        <div className="nav-items px-5 py-2">
            <ul className="flex justify-between w-90 pageList">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className="login">Login</button>
            </ul>
        </div>
    </div>
  )
}

export default Header