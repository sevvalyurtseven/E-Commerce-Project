import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  checkedProduct,
  removeFromCart,
  removeThisProduct,
} from "../store/actions/shoppingCartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast, faTrash } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ShoppingCartPage = () => {
  const { cart } = useSelector((state) => state.shoppingCart);
  const totalProductCount = cart.reduce((total, item) => total + item.count, 0);
  const dispatch = useDispatch();

  const toggleChecked = (product) => {
    dispatch(checkedProduct(product, product.count * -1));
  };

  const increment = (item) => {
    dispatch(addToCart(item.product, 1));
  };
  const decrement = (item) => {
    dispatch(removeFromCart(item.product));
  };
  const removeProduct = (id) => {
    dispatch(removeThisProduct(id));
  };

  let totalProductPrice = cart
    .filter((item) => item.checked == true)
    .reduce((total, item) => total + item.product.price * item.count, 0)
    .toFixed(2);

  const shippingCost = 40; // Example shipping cost
  const discount = 0; // Example discount, adjust as necessary

  let subtotal =
    totalProductPrice < 200
      ? totalProductPrice + shippingCost
      : totalProductPrice;

  subtotal = Number(subtotal).toFixed(2);
  return (
    <>
      <NavBar />
      <div className="mx-auto my-8 py-8 px-8 sm:px-6 lg:px-8 flex justify-between flex-wrap">
        <div className="flex-1 pl-10">
          <h3 className="text-2xl font-semibold mb-4">
            Sepetim ({totalProductCount} ürün)
          </h3>
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center flex-wrap justify-between gap-6 mb-6 p-10 border border-slate-300 rounded shadow-lg"
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleChecked(item.product)}
              ></input>
              <div className="flex grow items-center justify-between">
                <img
                  src={item.product.images[0].url}
                  alt={item.product.name}
                  className="object-cover rounded h-[10rem]"
                />
                <div className="ml-4">
                  <p className="text-xl font-semibold">{item.product.name}</p>
                  <p>Adet: {item.count}</p>
                  <p className="text-xs inline-flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faShippingFast}
                      className="text-sky-500"
                    />
                    En geç yarın kargoda!
                  </p>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => decrement(item)}
                    disabled={item.count === 1}
                    className={`bg-slate-500 text-white w-8 h-8 rounded-md mx-2 ${
                      item.count === 1 ? "opacity-40" : ""
                    }`}
                  >
                    -
                  </button>
                  <p className="px-3 py-1">{item.count}</p>
                  <button
                    onClick={() => increment(item)}
                    className="bg-slate-500 text-white w-8 h-8 rounded-md mx-2"
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="font-semibold">
                    $ {Number((item.count * item.product.price).toFixed(2))}
                  </p>
                </div>
                <div>
                  <button onClick={() => removeProduct(item.product.id)}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-sky-500 text-2xl"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mr-16 sm:ml-44 p-10 lg:w-1/4 h-[25rem] bg-white border border-gray-300 shadow rounded">
          <h2 className="text-2xl font-semibold text-gray-700 p-4 border-b border-gray-200">
            Order Summary
          </h2>
          <div className="flex flex-col p-4">
            <div className="flex justify-between py-2">
              <p className="text-slate-600 font-semibold">Product Cost</p>
              <p className="text-sky-600">$ {totalProductPrice}</p>
            </div>
            <div className="flex justify-between py-2">
              <p className="text-slate-600 font-semibold">Shipping</p>
              <p className="text-sky-600">
                $ {totalProductPrice < 200 ? shippingCost : 0}
              </p>
            </div>
            {discount > 0 && (
              <div className="flex justify-between py-2">
                <p className="text-slate-600 font-semibold">Discount</p>
                <p className="text-red-600">- $ {discount.toFixed(2)}</p>
              </div>
            )}
            <div className="flex justify-between py-2 font-semibold">
              <p className="text-slate-600">Subtotal</p>
              <p className="text-sky-600">$ {subtotal}</p>
            </div>
          </div>
          <div className="p-4">
            <button className="w-full bg-sky-500 text-white font-semibold py-3 rounded hover:bg-sky-600 transition-colors duration-300">
              Create Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
