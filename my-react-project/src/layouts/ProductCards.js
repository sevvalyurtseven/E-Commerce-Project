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

const ProductCards = () => {
    const productCards = [manken1, manken2, manken3, manken4, manken5, manken6, manken7, manken8, manken9, manken10];
  
    return (
      <div className="py-[5rem] flex flex-col items-center">
        <div className="flex flex-col items-center gap-3">
          <h4 className="text-xl text-[#737373] font-medium">Featured Products</h4>
          <h3 className="text-2xl font-bold">BESTSELLER PRODUCTS</h3>
          <p className="text-sm text-[#737373] pb-[3.5rem]">Problems trying to resolve the conflict between</p>
        </div>
        
        <div className="flex justify-center flex-wrap w-[75rem] gap-8">
          {productCards.map((image, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <img src={image} alt={`card ${index}`} />
              <h5 className="text-black text-base font-bold tracking-wider pt-[0.8rem]">Graphic Design</h5>
              <p className="text-[#737373] text-sm font-bold tracking-wider">English Department</p>
              <div className="flex justify-center gap-2">
                <h5 className="text-[#BDBDBD] font-bold text-base ">$16.48</h5>
                <h5 className="text-[#23856D] font-bold text-base">$6.48</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ProductCards;
  