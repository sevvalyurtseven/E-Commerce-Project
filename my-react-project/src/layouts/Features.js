import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookReader,
  faBookOpen,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

function Features() {
  const fontAwesomeIcons = [faBookReader, faBookOpen, faArrowTrendUp];

  const featureItems = [
    { title: "Easy Wins", description: "Get your best-looking smile now!" },
    {
      title: "Concrete",
      description:
        "Defalcate is most focused on helping you discover your most beautiful smile",
    },
    {
      title: "Hack Growth",
      description: "Overcame any hurdle or any other problem.",
    },
  ];

  return (
    <div className="w-[75%] py-20  gap-[5rem] flex-col justify-start items-center  inline-flex">
      <div className="text-center ml-[20rem]">
        <h3 className="text-[#737373] text-xl font-normal leading-[30px] tracking-wider">
          Featured Products
        </h3>
        <h2 className="text-[#252B42] text-2xl font-bold leading-loose tracking-wider">
          THE BEST SERVICES
        </h2>
        <p className="text-[#737373] text-sm font-normal leading-tight tracking-wider">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex justify-center items-start gap-[3rem] ml-[20rem]">
        {fontAwesomeIcons.map((icon, index) => (
          <div
            key={index}
            className="w-[310px] flex-col items-center inline-flex"
          >
            <div className="px-10 py-7 flex-col items-center gap-5 flex">
              <FontAwesomeIcon
                icon={icon}
                className="text-7xl text-[#23A6F0]"
              />
              <h2 className="text-[#252B42]  text-2xl font-bold leading-loose tracking-wider">
                {featureItems[index].title}
              </h2>
              <p className="text-[#737373] text-center text-sm font-normal leading-tight tracking-wider">
                {featureItems[index].description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
