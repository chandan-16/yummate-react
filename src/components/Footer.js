const Footer = () => {
  return (
    <div className="px-20 w-full flex justify-between py-10 bg-black">
        <ul className="text-white">
            <h2 className="text-gray-500 font-bold pb-2 text-xl">COMPANY</h2>
            <li><p>About Us</p></li>
            <li><p>Team</p></li>
            <li><p>Careers</p></li>
            <li><p>Food Studio Blog</p></li>
            <li><p>Bug Bounty</p></li>
            <li><p>Food Studio One</p></li>
            <li><p>Food Studio Corporate</p></li>
        </ul>

        <ul className="text-white">
            <h2 className="text-gray-500 font-bold pb-2 text-xl">CONTACT</h2>
            <li><p>Help and Suport</p></li>
            <li><p>Partner With Us</p></li>
            <li><p>Ride With Us</p></li>
        </ul>

        <ul className="text-white">
            <h2 className="text-gray-500 font-bold pb-2 text-xl">LEGAL</h2>
            <li><p>Terms and Conditions</p></li>
            <li><p>Refund and Cancellation</p></li>
            <li><p>Privacy Policy</p></li>
            <li><p>Cookie Policy</p></li>
            <li><p>Offer Terms</p></li>
        </ul>
    </div>
  )
}

export default Footer