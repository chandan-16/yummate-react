const Header = () => {
  return (
    <div className="header flex shadow mx-auto justify-between px-10 bg-gray-200 text-center">
        <div className="logo-container flex">
            <img className="w-10 h-10" src="https://media.licdn.com/dms/image/v2/D4D0BAQEbweyskSOwHg/company-logo_200_200/company-logo_200_200/0/1699870596590/yummate_logo?e=2147483647&v=beta&t=8ZZI7DACOHztLuvOK_GREJ1hCfMNFuiO_PHOgL0Xic4" alt="logo" />
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