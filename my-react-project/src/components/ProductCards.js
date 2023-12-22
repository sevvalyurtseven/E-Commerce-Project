import manken1 from "../Assets/mankencards/fixed-height-4.png";
import manken2 from "../Assets/mankencards/fixed-height-1.png";
import manken3 from "../Assets/mankencards/fixed-height-2.png";
import manken4 from "../Assets/mankencards/fixed-height-3.png";
import manken5 from "../Assets/mankencards/product-cover-5.png";
import manken6 from "../Assets/mankencards/fixed-height.png";
import manken7 from "../Assets/mankencards/fixed-height-5.png";
import manken8 from "../Assets/mankencards/fixed-height-6.png";
import manken9 from "../Assets/mankencards/product-cover-5-1.png";
import manken10 from "../Assets/mankencards/fixed-height-7.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductCards = () => {
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
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <Link to="/product">
        <div className="flex items-center justify-center gap-8 flex-wrap px-20">
        {productCards.map((image, index) => (
          <div key={index} className="flex flex-col items-center   gap-5 py-6">
            <img src={image} alt={`card ${index}`} />
            <h5 className="text-slate-800 text-base font-bold leading-normal tracking-wider">Graphic Design</h5>
            <p className="text-center text-neutral-500 text-sm font-bold leading-normal tracking-wider">English Department</p>
            <div className="flex  justify-center items-center gap-2">
              <h5 className="text-center text-stone-300 text-base font-bold leading-normal tracking-wider">$16.48</h5>
              <h5 className="text-center text-teal-700 text-base font-bold leading-normal tracking-wider">$6.48</h5>
            </div>
          </div>
        ))} 
        </div>
      </Link>
    </div>
   
  );
};

export default ProductCards;
