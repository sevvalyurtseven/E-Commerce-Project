import shop1 from "../../Assets/shop/card-cover-5.png";
import shop2 from "../../Assets/shop/media bg-cover.png";
import shop3 from "../../Assets/shop/media bg-cover1.png";
import shop4 from "../../Assets/shop/media bg-cover2.png";
import shop5 from "../../Assets/shop/media bg-cover3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Shop = () => {
  const categories = useSelector((state) => state.global.categories);
  const firstFiveCategories = categories
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

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

      <div className="flex justify-center items-center py-10 gap-4 flex-wrap md:flex-nowrap">
        {firstFiveCategories.map((category, index) => (
          <div key={index}>
            <Link
              to={`/shopping/${category.gender === "k" ? "Kadin" : "Erkek"}/${
                category.title
              }`}
            >
              <div className="relative text-center">
                <img
                  className="object-cover sm:w-64 w-80 h-96"
                  src={category.img}
                  alt={category.title}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-base leading-6">
                  <h6>{category.gender === "k" ? "KADIN" : "ERKEK"}</h6>
                  <h6>{category.title}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;
