import { useDispatch, useSelector } from "react-redux";
import { remove } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);

  return (
    <div className="px-4 sm:px-10 md:px-20 py-36 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8">Your Cart</h1>

      {cartItem.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">Your cart is empty.</p>
      ) : (
        cartItem.map((item) => (
          <div
            key={item["web-scraper-order"]}
            className="mb-6 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between border-b pb-4"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <img
                src={item["image-src"]}
                alt="Item"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="sm:pl-5 mt-3 sm:mt-0 text-center sm:text-left">
                <p className="font-semibold text-lg sm:text-xl">{item.name}</p>
                <p className="text-lg py-1 text-gray-700">₹{item.price}</p>
                <button
                  onClick={() => dispatch(remove(item))}
                  className="bg-red-600 mt-2 text-white rounded px-3 py-1 hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {cartItem.length > 0 && (
        <div className="pt-6">
          <hr className="mb-4" />
          <h2 className="text-xl font-semibold">
            Total Amount to Pay:{" "}
            <span className="text-orange-600 text-3xl font-bold">₹{total}</span>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;