import manken1 from "../../Assets/mankencards2/product-cover-5.png";
import manken2 from "../../Assets/mankencards2/product-cover-5-1.png";
import manken3 from "../../Assets/mankencards2/product-cover-5-2.png";
import manken4 from "../../Assets/mankencards2/product-cover-5-3.png";
import manken5 from "../../Assets/mankencards2/product-cover-5-4.png";
import manken6 from "../../Assets/mankencards2/product-cover-5-5.png";
import manken7 from "../../Assets/mankencards2/product-cover-5-6.png";
import manken8 from "../../Assets/mankencards2/product-cover-5-7.png";
import manken9 from "../../Assets/mankencards2/product-cover-5-8.png";
import manken10 from "../../Assets/mankencards2/product-cover-5-9.png";
import manken11 from "../../Assets/mankencards2/product-cover-5-10.png";
import manken12 from "../../Assets/mankencards2/product-cover-5-11.png";

import {
  faAngleDown,
  faListCheck,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PageButton from "../PageButton";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
const ProductPageCard = () => {
  const products = useSelector((state) => state.product.productList);

  const [selectedFilter, setSelectedFilter] = useState(""); // Başlangıçta seçilen filtre yok

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    // Filtre değiştikçe yapılacak işlemler buraya eklenebilir
  };

  return (
    <div className="w-full flex flex-col py-20 px-10">
      <div className="flex items-center sm:justify-between justify-center flex-wrap sm:flex-nowrap gap-5 sm:gap-0">
        <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">
          Showing all 12 results
        </p>

        <div className="flex items-center gap-5">
          <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">
            Views:
          </p>
          <div className="border border-solid border-gray-200 rounded-[5px] text-2xl p-4">
            <FontAwesomeIcon icon={faTableCellsLarge} />
          </div>
          <div className="border border-solid border-gray-200 rounded-[5px] text-2xl p-4">
            <FontAwesomeIcon icon={faListCheck} />
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex border border-solid bg-stone-50 rounded-[5px] text-2xl p-5">
            <select
              value={selectedFilter}
              onChange={handleFilterChange}
              className="text-neutral-500 text-sm font-normal leading-7 tracking-wider"
            >
              <option value="">Popularity</option>
              <option value="">Price Low to Low</option>
              <option value="">Price Low to High</option>
            </select>
          </div>
          <div className="flex items-center border border-solid bg-sky-500 py-5 px-8 rounded-[5px]">
            <button className=" text-white text-sm font-bold leading-normal tracking-wider">
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap px-20 py-14">
        {products.map((p, index) => (
          <div key={index} className="flex flex-col py-4 gap-4 w-1/5">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <div className="flex items-center flex-col">
        <PageButton />
      </div>
    </div>
  );
};

export default ProductPageCard;
