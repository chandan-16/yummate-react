import { useSelector } from "react-redux";

const Cart = () => {

  const cartItem = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);

  console.log("cartlist", cartItem);
  console.log("total", total);

  return (
    <div className="bg-[#E2F8F0] mx-20 py-20">
    {
      cartItem.map((item) => (
        <div key={item["web-scraper-order"]} className="mb-6 flex justify-between">
          <div className="flex justify-between">
            <div>
              <img src={  item["image-src"]} alt="Item" className="w-38 h-38 object-cover" />
            </div>

            <div className="pl-5">
              <p className="font-semibold text-2xl">{item.name}</p>
              <p className="text-2xl py-1">₹{item.price}</p>
              <p>Area: Pune</p>
              <button className="bg-red-600 mt-3 text-white rounded px-2 py-1 hover:bg-red-700 cursor-pointer">Delete</button>
            </div>

          </div>

        </div>

    ))}

    <div className="px=5">
        <h1>Total Amount to Pay:</h1>
        <p>{total}</p>
    </div>
    </div>
  )
}

export default Cart;