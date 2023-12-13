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
    <div className="py-10 w-[75%] m-auto">
      <div className="flex flex-col items-center font-bold leading-normal tracking-wider pb-24">
        <h6 className="text-sm text-[#23A6F0]">Practice Advice</h6>
        <h2 className="text-[2.5rem]">Featured Posts</h2>
      </div>

      <div className="flex gap-10">
        {postPictures.map((image, index) => (
          <div key={index} className="flex">
            <img src={image} alt={`post ${index}`} />
            <div className="relative">
              <div className="absolute right-[9rem] top-4 bg-red-500 rounded-[3px] shadow p-[0.1rem] px-2">
                <h2 className="text-white text-sm font-bold leading-normal tracking-wider">
                  Sale
                </h2>
              </div>

              <div className="absolute bottom-0 flex gap-12 mb-7 right-[3.5rem] space-x-2">
                <div className="relative">
                  <div className="absolute w-10 h-10 bg-white rounded-full -bottom-2 -left-3 flex items-center justify-center">
                    <FontAwesomeIcon icon={faHeart} className="text-black" />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute w-10 h-10 bg-white rounded-full -bottom-2 -left-3 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="text-black"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute w-10 h-10 bg-white rounded-full -bottom-2 -left-3 flex items-center justify-center">
                    <FontAwesomeIcon icon={faEye} className="text-black" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-7 pb-8 justify-between">
              <div className="flex justify-between items-center">
                <h6 className="text-[#23A6F0] text-sm font-bold leading-normal tracking-wider">
                  English Department
                </h6>

                <div className="flex p-[4px] px-2 border rounded-[20px] bg-[#252B42] text-[#FFCE31]">
                  <FontAwesomeIcon icon={faStar} />
                  <p className="text-white tracking-wider">4.9</p>
                </div>
              </div>
              <h5 className="text-[#252B42] text-base font-bold  tracking-wider">
                Graphic Design
              </h5>
              <p className="w-[250px] text-[#737373] text-sm font-medium leading-tight tracking-wider">
                We focus on ergonomics and meeting you where you work. It's only a
                keystroke away.
              </p>
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faDownload} className="text-[#737373]" />
                <span className="text-sm font-bold tracking-wider text-[#737373]">
                  15 Sales
                </span>
              </div>
              <div className="flex gap-2 font-bold">
                <span className="text-[#BDBDBD]">$16.48</span>
                <span className="text-[#23856D]">$6.48</span>
              </div>
              <img src={colors} className="w-1/3" />
              <div className="text-xs flex justify-between mt-2">
                <div>
                  <FontAwesomeIcon icon={faClock} className="text-[#23A6F0]" />
                  <span className="text-[#737373] ml-2">22h...</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faChartBar} className="text-[#E77C40]" />
                  <span className="text-[#737373] ml-2">64 Lessons</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="text-[#23856D]"
                  />
                  <span className="text-[#737373] ml-2">Progress</span>
                </div>
              </div>
              <button className="text-[#23A6F0] border rounded-[37px] border-[#23A6F0] py-3 px-5 flex gap-3 justify-center items-center w-40 mt-1 ">
                <span className="text-sm font-bold tracking-wider">
                  Learn More
                </span>
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
