import shop1 from "../../Assets/shop/card-cover-5.png";
import shop2 from "../../Assets/shop/media bg-cover.png";
import shop3 from "../../Assets/shop/media bg-cover1.png";
import shop4 from "../../Assets/shop/media bg-cover2.png";
import shop5 from "../../Assets/shop/media bg-cover3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const shopImgs = [shop1, shop2, shop3, shop4, shop5];

  return (
    <div className="bg-[#FAFAFA] flex flex-col py-10 px-10">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center px-12">
        <h2 className="text-center text-slate-800 text-2xl font-bold leading-loose tracking-wider">
          Shop
        </h2>

        <div className="flex gap-4">
          <p className="font-bold tracking-wider">Home</p>

          <FontAwesomeIcon
            className="text-[#BDBDBD] text-2xl tracking-wider"
            icon={faAngleRight}
          />

          <p className="text-[#BDBDBD] font-bold tracking-wider">Shop</p>
        </div>
      </div>

      <div className="flex justify-center items-center py-10 gap-4 flex-wrap">
        {shopImgs.map((card, index) => (
          <div key={index}>
            <div className="relative text-center">
              <img src={card} alt="shop"></img>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-base leading-6">
                <h6>CLOTHS</h6>
                <h6>5 Items</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;
