import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import video from "../../Assets/ABOUT/video.png";

function StatsSection() {
  return (
    <div>
      <div className="w-[75%] mx-auto flex sm:justify-start justify-center items-center py-28 gap-[9rem] flex-wrap sm:flex-nowrap">
        <div>
          <h1 className="text-center text-slate-800 text-[58px] font-bold leading-[80px] tracking-tight">
            15K
          </h1>
          <p className="text-center text-neutral-500 text-base font-bold leading-normal tracking-tight">
            Happy Customers
          </p>
        </div>
        <div>
          <h1 className="text-center text-slate-800 text-[58px] font-bold leading-[80px] tracking-tight">
            150K
          </h1>
          <p className="text-center text-neutral-500 text-base font-bold  leading-normal tracking-tight">
            Monthly Visitors
          </p>
        </div>
        <div>
          <h1 className="text-center text-slate-800 text-[58px] font-bold leading-[80px] tracking-tight">
            15
          </h1>
          <p className="text-center text-neutral-500 text-base font-bold  leading-normal tracking-tight">
            Countries Worldwide
          </p>
        </div>
        <div>
          <h1 className="text-center text-slate-800 text-[58px] font-bold leading-[80px] tracking-tight">
            100+
          </h1>
          <p className="text-center text-neutral-500 text-base font-bold  leading-normal tracking-tight">
            Top Partners
          </p>
        </div>
      </div>
      <div className="w-[75%] mx-auto py-6 flex items-center">
        <div className="relative rounded-2xl overflow-hidden">
          <img src={video} />
          <div className="absolute inset-0 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCirclePlay}
              className=" text-7xl text-white rounded-full bg-[#23A6F0]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
