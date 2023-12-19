import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../Assets/PRODUCT/productColors.png";
import {
  faAngleRight,
  faStar,
  faEye,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import sarikoltuk from "../../Assets/PRODUCT/sarikoltuk.png";
import kucuk1 from "../../Assets/PRODUCT/kucuk1.png";
import kucuk2 from "../../Assets/PRODUCT/kucuk2.png";

function ProductHeader() {
  return (
    <div className="bg-[#FAFAFA] px-44 relative">
      <div className="flex items-center justify-start gap-3 py-10">
        <h4 className=" text-slate-800 text-sm font-bold leading-normal tracking-wider">
          Home
        </h4>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-xl text-stone-300 "
        />
        <h4 className=" text-stone-300 text-sm font-bold leading-normal tracking-wider">
          Shop
        </h4>
      </div>
      <img src={sarikoltuk} />
      <div className="flex gap-4 pt-4">
        <img src={kucuk1} />
        <img src={kucuk2} />
      </div>
      <div className="absolute top-[17%] right-[15rem]">
        <h3 className="text-slate-800 text-xl font-medium leading-[30px] tracking-wider">
          Floating Phone
        </h3>
        <div className="flex items-center gap-1 py-4 ">
          <FontAwesomeIcon icon={faStar} className="text-[#F3CD03]" />
          <FontAwesomeIcon icon={faStar} className="text-[#F3CD03]" />
          <FontAwesomeIcon icon={faStar} className="text-[#F3CD03]" />
          <FontAwesomeIcon icon={faStar} className="text-[#F3CD03]" />
          <FontAwesomeIcon icon={emptyStar} className="text-[#F3CD03]" />

          <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">
            10 Reviews
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className=" text-slate-800 text-2xl font-bold leading-loose tracking-wider">
            $1,139.33
          </h4>
          <div className="flex gap-2">
            <h5 className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">
              Availability :
            </h5>
            <h5 className="text-sky-500 text-sm font-bold leading-normal tracking-wider">
              In Stock{" "}
            </h5>
          </div>
          <div className="py-10">
            <p className="text-zinc-500 text-sm font-normal leading-tight tracking-wider">
              Met minim Mollie non desert Alamo est sit cliquey dolor <br />
              do met sent. RELIT official consequent door ENIM RELIT Mollie.{" "}
              <br />
              Excitation venial consequent sent nostrum met.
            </p>
          </div>
          <hr></hr>
          <div className="py-10">
            <img src={colors} />
          </div>

          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-bold leading-normal tracking-wider border border-solid rounded-md bg-[#23A6F0] px-6 py-3">
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
  );
}
export default ProductHeader;
