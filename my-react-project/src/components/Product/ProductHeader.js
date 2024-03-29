import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../Assets/PRODUCT/productColors.png";
import {
  faAngleRight,
  faStar,
  faEye,
  faCartShopping,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

import Slider from "../Slider";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ProductHeader() {
  const selectedProduct = useSelector((store) => store.product);

  const { productId } = useParams();

  const selectedId = selectedProduct.productList.find(
    (item) => item.id == productId
  );

  const history = useHistory();

  return (
    <div className="bg-[#FAFAFA] sm:px-20 px-0">
      <div className="flex items-center sm:justify-start justify-center gap-3 py-10">
        <button
          className=" text-slate-800 text-sm font-bold leading-normal tracking-wider cursor-pointer hover:text-sky-500 "
          onClick={() => history.goBack()}
        >
          {" "}
          <FontAwesomeIcon icon={faArrowCircleLeft} className="text-xl" />
        </button>
        <button
          className=" text-slate-800 text-sm font-bold leading-normal tracking-wider cursor-pointer hover:text-sky-500 "
          onClick={() => history.push("/")}
        >
          Home
        </button>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-xl text-stone-300 "
        />
        <button
          className=" text-stone-300 text-sm font-bold leading-normal tracking-wider cursor-pointer hover:text-sky-500"
          onClick={() => history.push("/productlist")}
        >
          Shop
        </button>
      </div>
      <div className="flex justify-start items-start flex-wrap md:flex-nowrap py-6">
        <Slider />
        <div className="flex flex-col  py-6  sm:px-16 px-10">
          <h3 className="text-slate-800 text-xl font-medium leading-[30px] tracking-wider">
            {selectedId.name}
          </h3>
          <div className="flex items-center gap-1 py-4 ">
            <FontAwesomeIcon icon={faStar} className="text-[#F3CD03]" />
            <FontAwesomeIcon icon={faStar} className="text-[#F3CD03]" />
            <FontAwesomeIcon icon={faStar} className="text-[#F3CD03]" />
            <FontAwesomeIcon icon={faStar} className="text-[#F3CD03]" />
            <FontAwesomeIcon icon={emptyStar} className="text-[#F3CD03]" />

            <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">
              {selectedId.rating}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className=" text-slate-800 text-2xl font-bold leading-loose tracking-wider">
              ${selectedId.price}
            </h4>
            <div className="flex gap-2">
              <h5 className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">
                Availability :
              </h5>
              <h5 className="text-sky-500 text-sm font-bold leading-normal tracking-wider">
                {selectedId.stock}
              </h5>
            </div>
            <div className="py-10">
              <p className="text-zinc-500 text-sm font-normal leading-tight tracking-wider">
                {selectedId.description}
              </p>
            </div>
            <hr></hr>
            <div className="sm:py-10 py-4">
              <img src={colors} />
            </div>

            <div className="flex sm:items-center gap-4">
              <button className="text-white text-sm font-bold leading-normal tracking-wider border border-solid rounded-md bg-[#23A6F0] sm:px-6 sm:py-3 px-10">
                Select Options
              </button>

              <FontAwesomeIcon
                icon={faHeart}
                className="border border-solid rounded-full border-[#E8E8E8] p-3"
              />
              <FontAwesomeIcon
                icon={faCartShopping}
                className="border border-solid rounded-full border-[#E8E8E8] p-3"
              />
              <FontAwesomeIcon
                icon={faEye}
                className="border border-solid rounded-full border-[#E8E8E8] p-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductHeader;
