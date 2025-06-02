const Contact = () => {
  return (
    <div className="px-20 py-10">
      <h2 className="text-5xl pb-5">Contact Us</h2>
      <form className="p-10 border border-1 border-black rounded-lg w-full">
        <p className="text-xl pb-2">Name</p>
        <input className="border w-full py-2 pl-2 rounded-lg" type="text" placeholder="Enter Your Name" />

        <p className="text-xl py-2">Email</p>
        <input className="border w-full py-2 pl-2 rounded-lg" type="email" placeholder="Enter Your Email" />

        <p className="text-xl pt-2">Message</p>
        <textarea className="border w-full py-2 pl-2 rounded-lg mt-2 h-32 mb-2" placeholder="Your Opinion Matter's" name="" id=""></textarea>

        <button className="text-white bg-green-500 py-3 px-6 rounded-lg text-xl hover:bg-green-600 cursor-pointer">Submit</button>
      </form>
    </div>
  )
}

export default Contact