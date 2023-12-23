import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faChartBar,
  faChartLine,
  faClock,
  faDownload,
  faStar,
  faEye,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

import post1 from "../Assets/post/post2.png";
import post2 from "../Assets/post/post1.png";
import colors from "../Assets/post/product-colors.png";

function Post() {
  const postPictures = [post1, post2];
  return (
    <div className="flex py-10 px-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <h4 className=" text-sky-500 text-sm font-bold  leading-normal tracking-wider">
          Practice Advice
        </h4>
        <h2 className=" text-slate-800 text-[40px] font-bold leading-[50px] tracking-wider">
          Featured Posts
        </h2>
        <div className="flex flex-wrap py-20 px-10 gap-5">
          {postPictures.map((image, index) => (
            <div key={index} className="flex flex-wrap gap-10 py-6">
                
              <img src={image} alt={`post ${index}`} />
              
                <div className="flex flex-col gap-5  sm:px-8 sm:py-10">
                  <h4 className="text-sky-500 text-sm font-bold leading-normal tracking-wider">
                    English Department
                  </h4>
                  <h2 className="text-slate-800 text-base font-bold leading-normal tracking-wider"></h2>
                  <p className="text-neutral-500 text-sm font-normal leading-tight tracking-wider">
                    We focus on ergonomics and{" "}
                    <br className="hidden sm:block" />
                    meeting you where you work. It's{" "}
                    <br className="hidden sm:block" />
                    only a keystroke away.
                  </p>
                  <div className="flex gap-2 items-center ">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="text-[#737373]"
                    />
                    <span className="text-sm font-bold tracking-wider text-[#737373]">
                      15 Sales
                    </span>
                  </div>
                  <div className="flex gap-2 font-bold">
                    <span className="text-[#BDBDBD]">$16.48</span>
                    <span className="text-[#23856D]">$6.48</span>
                  </div>
                  <div className="flex pb-2">
                    <img src={colors} />
                  </div>

                  <div className="flex items-center gap-3 pb-3">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-[#23A6F0]"
                    />
                    <p className="text-neutral-500 text-xs font-normal leading-none tracking-wider">
                      22h...
                    </p>
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="text-[#23A6F0]"
                    />
                    <p className="text-neutral-500 text-xs font-normal leading-none tracking-wider">
                      64 Lessons
                    </p>
                    <FontAwesomeIcon
                      icon={faChartBar}
                      className="text-[#E77C40]"
                    />
                    <p className="text-neutral-500 text-xs font-normal leading-none tracking-wider">
                      Progress
                    </p>
                  </div>
                  <div className="flex justify-start">
                    <button className="text-center sm:border border-solid rounded-3xl border-sky-500 text-sky-500 sm:px-8 py-3 font-bold tracking-wider">
                      Learn More
                      <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                  </div>
                </div>
              </div>
          
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
