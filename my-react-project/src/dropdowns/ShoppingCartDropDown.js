import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../store/actions/shoppingCartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ShoppingCartDropDown = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.shoppingCart);

  const [isHovered, setIsHovered] = useState(false);

  const totalProductCount = cart.reduce((total, item) => total + item.count, 0);

  const increment = (item) => {
    dispatch(addToCart(item.product));
  };

  const decrement = (item) => {
    dispatch(removeFromCart(item.product));
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center px-2 gap-1 cursor-pointer">
        <FontAwesomeIcon icon={faCartShopping} />({totalProductCount})
      </div>
      {isHovered && (
        <div className="absolute z-10 text-center right-0 w-72 bg-white rounded-md shadow-lg">
          <div className="flex flex-col gap-2 p-2 px-4">
            <div className="border bg-sky-500 rounded-md px-2 py-2">
              <p className="text-start text-sky-50 ">
                Sepetim ({totalProductCount} ürün)
              </p>
            </div>
            {cart.map((item) => (
              <div key={item.product.id} className="flex items-center mb-4">
                <img
                  src={item.product.images[0].url}
                  alt={item.product.name}
                  className="object-cover h-16 rounded-md mr-2"
                />
                <div className="flex flex-col mx-4 items-start gap-2 w-full text-sm text-black">
                  <p>{item.product.name}</p>
                  <div className="flex w-full justify-between">
                    <p className="flex">
                      $ {Number((item.count * item.product.price).toFixed(2))}
                    </p>
                    <div className="flex justify-evenly">
                      <button
                        onClick={() => increment(item)}
                        className="bg-slate-200 text-black text-sm w-4 rounded-sm"
                      >
                        +
                      </button>
                      <p className="px-2">{item.count}</p>
                      <button
                        onClick={() => decrement(item)}
                        className="bg-slate-200 text-black text-sm w-4 rounded-sm"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-evenly">
              <button className="bg-sky-500 text-white text-sm rounded p-1 px-2">
                Sepete Git
              </button>
              <button className="bg-sky-500 text-white text-sm rounded p-1 px-2">
                Siparisi Tamamla
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartDropDown;
