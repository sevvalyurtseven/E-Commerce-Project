import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Slider = () => {
  const selectedProduct = useSelector((store) => store.product);
  const { productId } = useParams();

  const selectedId = selectedProduct.productList.find(
    (item) => item.id.toString() === productId
  );

  const [activeId, setActiveId] = useState(0);
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);

  // Kullanılacak görsellerin seçilmesi
  const arr = selectedId ? selectedId.images.map((image) => image.url) : [];

  const toLeft = () => {
    setActiveId(activeId === 0 ? arr.length - 1 : activeId - 1);
  };

  const toRight = () => {
    setActiveId(activeId === arr.length - 1 ? 0 : activeId + 1);
  };

  const handleClick = (index) => {
    setActiveId(index);
  };

  useEffect(() => {
    if (container2Ref.current) {
      const activeElement = container2Ref.current.querySelector(".active");
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeId]);

  useEffect(() => {
    if (container1Ref.current) {
      const activeElement1 = container1Ref.current.querySelector(".active");
      if (activeElement1) {
        activeElement1.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeId]);

  return (
    <div className="flex flex-col gap-2">
      <section className="relative">
        <div
          className="absolute top-0 left-0 w-16 h-full flex items-center"
          onClick={toLeft}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="w-16 h-16 text-white pl-5"
          />
        </div>
        <div
          className="absolute top-0 right-0 w-16 h-full flex items-center"
          onClick={toRight}
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className="w-16 h-16 text-white pr-5"
          />
        </div>
        <div
          className="flex overflow-hidden w-96 h-60 md:w-[600px] md:h-[500px] gap-5"
          ref={container1Ref}
        >
          {arr.map((image, i) => (
            <div
              key={i}
              className={`shrink-0 w-96 h-60 md:w-[600px] md:h-[500px] ${
                activeId === i ? "active" : ""
              }`}
            >
              <img
                src={image}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </section>
      <section
        className="w-96 h-16 md:w-[600px] md:h-32 flex gap-5 overflow-x-scroll"
        ref={container2Ref}
      >
        {arr.map((image, i) => (
          <div
            key={i}
            className={`opacity-50 shrink-0 md:w-52 ${
              activeId === i ? "active" : ""
            }`}
            onClick={() => handleClick(i)}
          >
            <img
              src={image}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Slider;
