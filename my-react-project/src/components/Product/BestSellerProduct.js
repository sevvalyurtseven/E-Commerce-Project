import line from "../../Assets/PRODUCT/Line 1.svg";
import img1 from "../../Assets/PRODUCT/product1.png";
import img2 from "../../Assets/PRODUCT/product2.png";
import img3 from "../../Assets/PRODUCT/product3.png";
import img4 from "../../Assets/PRODUCT/product4.png";
import img5 from "../../Assets/PRODUCT/product5.png";
import img6 from "../../Assets/PRODUCT/product6.png";
import img7 from "../../Assets/PRODUCT/product7.png";
import img8 from "../../Assets/PRODUCT/product8.png";

function BestSellerProduct() {
  const productCards = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <div className="sm:px-44  py-8 bg-[#FAFAFA]">
      <h1 className="text-slate-800 text-2xl font-bold leading-loose tracking-wider text-center sm:text-start">
        BESTSELLER PRODUCTS
      </h1>
      <img src={line} className="py-5" />
      <div className="flex gap-6 flex-wrap justify-center sm:justify-normal items-center pb-10">
        {productCards.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 pb-8 bg-[#FFFFFF]"
          >
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
          </div>
        ))}
      </div>
    </div>
  );
}
export default BestSellerProduct;
