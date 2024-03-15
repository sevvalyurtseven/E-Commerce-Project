import slugify from "slugify";
import colors from "../../Assets/post/product-colors.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  ADD_TO_CART,
  addToCart,
} from "../../store/actions/shoppingCartActions";
import {
  faCartShopping,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = ({ product }) => {
  const categoryMap = {
    1: "tisort",
    2: "ayakkabi",
    3: "ceket",
    4: "elbise",
  };
  const categoryName = categoryMap[product.category_id];
  const productNameSlug = slugify(product.name, { lower: true });
  const url = `/${categoryName}/${product.id}/${productNameSlug}`;

  const productImg = product.images[0].url;

  const isProductInCart = useSelector((store) => store.shoppingCart.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <Link to={`product${url}`}>
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={productImg} alt={`card ${product.id}`} />
          <h5 className="text-slate-800 text-base font-bold leading-normal tracking-wider">
            {product.name}
          </h5>
          <p className="text-center text-neutral-500 text-sm font-bold leading-normal tracking-wider h-20">
            {product.description}
          </p>
          <div className="flex  justify-center items-center gap-2">
            <h5 className="text-center text-stone-300 text-base font-bold leading-normal tracking-wider">
              ${product.price * 2}
            </h5>
            <h5 className="text-center text-teal-700 text-base font-bold leading-normal tracking-wider">
              ${product.price}
            </h5>
          </div>
          <div className="flex flex-row justify-center items-center py-3">
            <img src={colors} />
          </div>
        </div>
      </Link>
      <div className="pb-4">
        <button
          onClick={handleClick}
          className="text-center text-white text-base font-bold leading-normal tracking-wider border bg-sky-500 rounded-md px-4 py-2"
        >
          Add To Cart
          <FontAwesomeIcon icon={faCartShopping} className="text-white pl-2" />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
