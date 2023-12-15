import manken1 from "../Assets/mankencards2/product-cover-5.png";
import manken2 from "../Assets/mankencards2/product-cover-5-1.png";
import manken3 from "../Assets/mankencards2/product-cover-5-2.png";
import manken4 from "../Assets/mankencards2/product-cover-5-3.png";
import manken5 from "../Assets/mankencards2/product-cover-5-4.png";
import manken6 from "../Assets/mankencards2/product-cover-5-5.png";
import manken7 from "../Assets/mankencards2/product-cover-5-6.png";
import manken8 from "../Assets/mankencards2/product-cover-5-7.png";
import manken9 from "../Assets/mankencards2/product-cover-5-8.png";
import manken10 from "../Assets/mankencards2/product-cover-5-9.png";
import manken11 from "../Assets/mankencards2/product-cover-5-10.png";
import manken12 from "../Assets/mankencards2/product-cover-5-11.png";
import colors from "../Assets/post/product-colors.png";

import {
  faAngleDown,
  faListCheck,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PageButton from "./PageButton";

const ProductPageCard = () => {
  const productCards = [
    manken1,
    manken2,
    manken3,
    manken4,
    manken5,
    manken6,
    manken7,
    manken8,
    manken9,
    manken10,
    manken11,
    manken12,
  ];

  

  const [selectedFilter, setSelectedFilter] = useState(""); // Başlangıçta seçilen filtre yok

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    // Filtre değiştikçe yapılacak işlemler buraya eklenebilir
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <div className="flex justify-between items-center py-[3rem] mx-[4rem]">
          <p className="text-[#737373] tracking-wider font-bold">
            Showing all 12 results
          </p>

          <div className="flex items-center gap-[1rem]">
            <p className="text-[#737373] tracking-wider font-bold ">Views:</p>

            <div className="border rounded-md p-[0.9rem] ">
              <FontAwesomeIcon icon={faTableCellsLarge} />
            </div>
            <div className="border rounded-md p-[0.9rem] text-[#737373]">
              <FontAwesomeIcon icon={faListCheck} />
            </div>
          </div>
          <div className="flex gap-[1rem] items-center relative">
            <select
              value={selectedFilter}
              onChange={handleFilterChange}
              className="text-[#737373] tracking-wider border rounded-md py-[1rem] px-[2rem]  bg-[#F9F9F9] appearance-none"
            >
              <option value="">Popularity</option>
            </select>
            <div className="text-[#737373] absolute  flex items-center px-[7rem] pointer-events-none">
              <FontAwesomeIcon
                icon={faAngleDown}
                style={{ marginLeft: "0.6rem" }}
              />
            </div>
            <button className="text-white bg-[#23A6F0] rounded-md py-4 px-7 font-bold tracking-wider">
              Filter
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-wrap w-[75rem] gap-9  ">
          {productCards.map((image, index) => (
            <div key={index} className="flex flex-col items-center gap-4 pb-10">
              <img src={image} alt={`card ${index}`} />
              <h5 className="text-black text-base font-bold tracking-wider leading-normal pt-[0.8rem]">
                Graphic Design
              </h5>
              <p className="text-[#737373] text-sm font-bold tracking-wider">
                English Department
              </p>
              <div className="flex justify-center gap-2">
                <h5 className="text-[#BDBDBD] font-bold text-base ">$16.48</h5>
                <h5 className="text-[#23856D] font-bold text-base">$6.48</h5>
              </div>
              <img src={colors} />
            </div>
          ))}
        </div>
        <div className="flex justify-center pb-[4rem] mt-[5rem]">
        <PageButton/>
        </div>
      </div>
    </div>
  );
};

export default ProductPageCard;
