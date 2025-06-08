const Contact = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 py-10 max-w-screen-lg mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-6 text-center">Contact Us</h2>
      <form className="p-6 sm:p-10 border border-gray-300 rounded-xl shadow-md bg-white">
        <p className="text-lg sm:text-xl font-medium block pb-2 ">Name</p>
        <input className="border w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mb-4" type="text" placeholder="Enter Your Name" />

        <p className="text-lg sm:text-xl font-medium block pb-2">Email</p>
        <input className="border w-full py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mb-4" type="email" placeholder="Enter Your Email" />

        <p className="text-lg sm:text-xl font-medium block pb-2">Message</p>
        <textarea className="order w-full py-2 px-3 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 mb-6" placeholder="Your Opinion Matter's" name="" id=""></textarea>

        <button className="bg-green-500 hover:bg-green-600 text-white text-lg sm:text-xl font-medium py-3 px-6 rounded-md transition duration-200 w-full sm:w-auto">Submit</button>
      </form>
    </div>
  )
}

export default Contact