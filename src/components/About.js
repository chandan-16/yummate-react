import { AboutBanner } from "../utils/constants";

const About = () => {
  return (
    <div className="pb-12 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 pt-20">
      <div>
        <h2 className="bg-gray-600 text-lg sm:text-xl italic font-normal text-white text-center py-6 sm:py-8 px-4">
          ″Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
        </h2>
        <img className="w-full h-auto mt-6 rounded-lg shadow" src={AboutBanner} alt="About Banner Image" />
      </div>

      <h3 className="text-black text-center text-2xl sm:text-3xl md:text-4xl font-bold mt-10 pb-4">
        What’s In Store For The Future?
      </h3>
      <p className="text-gray-600 text-base sm:text-lg md:text-xl text-center px-2 sm:px-10 lg:px-20">
        "Yummate has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings."
      </p>

      <div className="pt-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-black text-center mb-8">
          Changing <span className="font-bold">the Game</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-lg sm:text-xl">
          <div className="border border-red-500 p-4 rounded-lg shadow-sm">
            <p><span className="font-bold text-2xl">150000+</span><br />Restaurant Partners Countrywide</p>
          </div>
          <div className="border border-red-500 p-4 rounded-lg shadow-sm">
            <p><span className="font-bold text-2xl">260000+</span><br />Delivery Executives</p>
          </div>
          <div className="border border-red-500 p-4 rounded-lg shadow-sm">
            <p><span className="font-bold text-2xl">5000+</span><br />Employees across the Country</p>
          </div>
          <div className="border border-red-500 p-4 rounded-lg shadow-sm">
            <p><span className="font-bold text-2xl">500+</span><br />Cities PAN India</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;