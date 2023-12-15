import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../layouts/Header"
import HeaderCopy from "../layouts/HeaderCopy";



const MainSlider = () => {
  const settings = {
    dots: true,
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
    </div>
  );
};

export default MainSlider;