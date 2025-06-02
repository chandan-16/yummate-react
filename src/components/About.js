import { AboutBanner } from "../utils/constants";

const About = () => {
  return (
    <div className="pb-6 w-full">
      <div>
        <h2 className="bg-gray-600 text-xl italic font-normal text-white text-center py-8">″Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</h2>
        <img className="w-full" src={AboutBanner} alt="About Banner Image" />
      </div>
        <h3 className="text-black text-center text-4xl pb-5">What’s In Store For The Future?</h3>
        <p className="text-gray-500 text-xl text-center">"Yummate has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings."</p>
      
      <div className="flex px-20 pt-10 justify-between">
        <div>
          <h1 className="text-5xl text-black ">Changing <span className="font-bold">the Game</span></h1>
        </div>

        <div className="flex">
          <div className="w-155 flex text-center w-240 ml-7 text-xl">
            <p className="border border-red-500 p-4 "><span className="font-bold">150000+</span> Restaurant Partners Countrywide</p>
            <p className="border border-red-500 p-4  p-4 ml-2"><span className="font-bold">260000+</span> Delivery Executives</p>
            <p className="border border-red-500 p-4 p-4 mx-2"><span className="font-bold">5000+</span> Employees across the Country</p>
            <p className="border border-red-500 p-4 p-4"><span className="font-bold">500+</span> Cites PAN India</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;