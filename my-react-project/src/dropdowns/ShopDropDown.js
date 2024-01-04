import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ShopDropDown = () => {
  const categories = useSelector((state) => state.global.categories);
  console.log("categories", categories);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  const femaleCategories = categories.filter((c) => c.gender === "k");
  const maleCategories = categories.filter((c) => c.gender === "e");

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-[#737373]">
        <NavLink to="/productList" exact>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="pl-3 hidden xl:block"
          />
        </NavLink>
      </div>
      {isDropdownOpen && (
        <div className="absolute z-10 ">
          <div className="flex bg-white">
            <div className="py-6">
              <div className="font-bold px-4 py-2 text-2xl">Kadın</div>
              {femaleCategories.map((category) => (
                <NavLink
                  key={category.id}
                  to={`/shopping/Kadin/${category.title}`}
                  className=" flex font-normal px-6 py-2  text-base"
                >
                  {category.title}
                </NavLink>
              ))}
            </div>
            <div className="py-6">
              <div className="font-bold  py-2 px-4 text-2xl">Erkek</div>
              {maleCategories.map((category) => (
                <NavLink
                  key={category.id}
                  to={`/shopping/Erkek${category.title}`}
                  className=" flex font-normal px-4 py-2  text-base tracking-wider"
                >
                  {category.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShopDropDown;
