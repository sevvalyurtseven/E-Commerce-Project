import img1 from "../../Assets/shopcards/image1.png";
import img2 from "../../Assets/shopcards/image2.png";
import img3 from "../../Assets/shopcards/image3.png";

function ShopCards() {
  return (
    <div className="flex flex-wrap items-center  justify-center gap-5 py-20">
      <div className="relative md:w-[49%]">
        <img src={img1} />
        <div className="absolute bottom-0 left-0 w-4/6 h-max border border-cyan-600 bg-cyan-600 bg-opacity-75 p-3">
          <div className="flex flex-col items-center">
            <h4 className="text-white text-2xl font-bold leading-loose tracking-wider text-center">
              Top Product Of <br /> the Week
            </h4>

            <div className="flex items-center text-[#23A6F0] text-3xl">
              <button className="text-white border border-white py-3 px-8 text-sm font-bold leading-snug tracking-wider">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:w-[45%] ">
        <div className="relative">
          <img src={img2} />
          <div className="absolute bottom-0 left-0 w-4/6 h-max border border-cyan-600 bg-cyan-600 bg-opacity-75 p-3">
            <div className="flex flex-col items-center">
              <h4 className="text-white text-2xl font-bold leading-loose tracking-wider text-center">
                Top Product Of <br /> the Week
              </h4>

              <div className="flex items-center text-[#23A6F0] text-3xl">
                <button className="text-white border border-white py-3 px-8 text-sm font-bold leading-snug tracking-wider">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={img3} />
          <div className="absolute bottom-0 left-0 w-4/6 h-max border border-cyan-600 bg-cyan-600 bg-opacity-75 p-3">
            <div className="flex flex-col items-center">
              <h4 className="text-white text-2xl font-bold leading-loose tracking-wider text-center">
                Top Product Of <br /> the Week
              </h4>

              <div className="flex items-center text-[#23A6F0] text-3xl">
                <button className="text-white border border-white py-3 px-8 text-sm font-bold leading-snug tracking-wider">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCards;
