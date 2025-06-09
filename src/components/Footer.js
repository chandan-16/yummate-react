const Footer = () => {
  return (
      <footer className="w-full bg-black text-white px-6 md:px-10 lg:px-20 py-8">
        <h2 className="text-gray-500 font-bold pb-2 text-lg text-left italic">Designed & Developed by Chandan Gautam with ❤️</h2>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <ul>
          <h2 className="text-gray-500 font-bold pb-2 text-lg">COMPANY</h2>
          <li><p>About Us</p></li>
          <li><p>Team</p></li>
          <li><p>Careers</p></li>
          <li><p>Food Studio Blog</p></li>
          <li><p>Food Studio Corporate</p></li>
        </ul>

        <ul>
          <h2 className="text-gray-500 font-bold pb-2 text-lg">CONTACT</h2>
          <li><p>Help and Support</p></li>
          <li><p>Partner With Us</p></li>
          <li><p>Ride With Us</p></li>
        </ul>

        <ul>
          <h2 className="text-gray-500 font-bold pb-2 text-lg">LEGAL</h2>
          <li><p>Terms and Conditions</p></li>
          <li><p>Refund and Cancellation</p></li>
          <li><p>Privacy Policy</p></li>
          <li><p>Cookie Policy</p></li>
          <li><p>Offer Terms</p></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer