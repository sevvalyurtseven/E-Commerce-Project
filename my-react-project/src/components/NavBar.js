import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRightFromBracket,
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";

import { Link } from "react-router-dom";

import Gravatar from "react-gravatar";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { userLogout } from "../store/actions/userActions";
import ShopDropDown from "../dropdowns/ShopDropDown";
import ShoppingCartDropDown from "../dropdowns/ShoppingCartDropDown";

function NavBar() {
  const { user, isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(userLogout());
    history.push("/");
  };

  return (
    <div className="font-bold">
      <div className="xl:flex  hidden flex-wrap justify-between text-white text-sm font-bold leading-normal tracking-wider bg-[#252B42] px-8 py-5 ">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faPhone} />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex items-center gap-3">
          <p>Follow Us :</p>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between pb-4 pt-4 px-14">
        <div className="flex items-center justify-between self-stretch">
          <h2 className="text-slate-800 md:text-2xl text-base font-bold leading-loose tracking-wider">
            Bandage
          </h2>
          <FontAwesomeIcon icon={faBars} className="sm:hidden block" />
        </div>
        <nav className="flex flex-col sm:flex-row items-center  gap-6 text-center text-neutral-500 font-normal sm:font-bold leading-normal tracking-wider pt-10 sm:pt-0">
          <Link to="/">Home</Link>
          <div
            className="text-[#252B42] font-medium flex items-center"
            onClick={() => history.push("/productlist")}
          >
            Shop
            <ShopDropDown />
          </div>
          <Link to="/about">About</Link>
          <Link to="/">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Pages</Link>
        </nav>
        <div className=" text-sky-500  font-bold leading-normal tracking-wider flex  xl:flex-row items-center xl:gap-4 gap-5 pt-6 md:pt-0  ">
          {isLoggedIn ? (
            <div className="flex flex-wrap items-center px-2 gap-1">
              <Gravatar email={user.email} className="rounded-full w-12" />
              <p className="flex text-black px-3 tracking-wider">{user.name}</p>
            </div>
          ) : (
            <div className="flex flex-wrap items-center px-2 gap-1">
              <FontAwesomeIcon icon={faUser} />
              <Link to="/login">
                <span> Login</span>
              </Link>
              <span> /</span>
              <Link to="/signup">
                <span> Register</span>
              </Link>
            </div>
          )}
        </div>
        <div className=" text-sky-500  font-bold leading-normal tracking-tight flex flex-col xl:flex-row items-center xl:gap-14 gap-5 pt-6  pb-4 ">
          <Link to="/">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <button className="flex flex-col xl:flex-row items-center">
            <ShoppingCartDropDown />
          </button>
          <Link to="/">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </div>
        <div>
          {user.name ? (
            <div className="flex items-center px-2 py-1 gap-3 tracking-wider text-white border border-sky-500 bg-sky-500  rounded-md ">
              <p>
                <button onClick={() => handleLogout()}>Logout</button>
              </p>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
