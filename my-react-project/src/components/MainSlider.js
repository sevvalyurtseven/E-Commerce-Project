import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../layouts/Header";
import HeaderCopy from "../layouts/HeaderCopy";

const MainSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="mx-auto">
      <Slider {...settings}>
        <div>
          <Header />
        </div>
        <div>
          <HeaderCopy />
        </div>
      </Slider>

      <style jsx>{`
        .slick-prev,
        .slick-next {
          font-size: 60px;
          padding: 20px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        .slick-prev {
          left: 50px;
        }

        .slick-next {
          right: 140px;
        }
      `}</style>
    </div>
  );
};

export default MainSlider;



