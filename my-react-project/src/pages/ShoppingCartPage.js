import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeThisProduct,
} from "../store/actions/shoppingCartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookReader,
  faShippingFast,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ShoppingCartPage = () => {
  const { cart } = useSelector((state) => state.shoppingCart);
  const totalProductCount = cart.reduce((total, item) => total + item.count, 0);

  const dispatch = useDispatch();

  const increment = (item) => {
    dispatch(addToCart(item.product, 1));
  };
  const decrement = (item) => {
    dispatch(removeFromCart(item.product));
  };
  const removeProduct = (id) => {
    dispatch(removeThisProduct(id));
  };

  return (
    <>
      <NavBar />
      <div className="mx-auto my-8 py-8 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold mb-4">
          Sepetim ({totalProductCount} ürün)
        </h3>
        {cart.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center flex-wrap justify-between gap-8 mb-6 p-10 border border-slate-300 rounded shadow-lg"
          >
            <div className="flex  grow items-center justify-between mt-4 md:mt-0 ">
              <img
                src={item.product.images[0].url}
                alt={item.product.name}
                className="object-cover rounded h-[10rem] md:h-[10rem]"
              />
              <div className="ml-4 w-full">
                <p className="text-xl font-semibold">{item.product.name}</p>
                <p>Adet: {item.count}</p>
                <p className="text-xs inline-flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faShippingFast}
                    className="text-sky-500 text-base"
                  />
                  En geç yarın kargoda!
                </p>
              </div>
            </div>
            <div className="flex md:justify-center mt-4 md:mt-0">
              <button
                onClick={() => decrement(item)}
                disabled={item.count === 1}
                className={`bg-slate-500 text-white text-xl w-8 h-8 rounded-md mx-2 ${
                  item.count === 1 ? "opacity-40" : ""
                }`}
              >
                -
              </button>
              <p className="px-3 py-1 text-xl">{item.count}</p>
              <button
                onClick={() => increment(item)}
                className="bg-slate-500 text-white text-xl w-8 h-8 rounded-md mx-2"
              >
                +
              </button>
            </div>
            <div className="flex justify-center md:justify-start">
              <p className="font-semibold text-xl min-w-[6rem]">
                $ {Number((item.count * item.product.price).toFixed(2))}
              </p>
            </div>
            <div className="flex justify-center md:justify-end md:flex-none">
              <button onClick={() => removeProduct(item.product.id)}>
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-sky-500 text-2xl"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
