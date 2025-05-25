const Header = () => {
  return (
    <div className="header flex shadow mx-auto justify-between px-10 bg-gray-200 text-center">
        <div className="logo-container flex">
            <span className="text-2xl font-bold text-gray-400">YUMMATE</span>
        </div>

        <div>Search</div>
        <div className="nav-items px-5 py-2">
            <ul className="flex justify-between w-60 ">
                <li className="">Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header