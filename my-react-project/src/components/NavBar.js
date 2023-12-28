import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
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

function NavBar() {
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
          <FontAwesomeIcon icon = {faBars} className="sm:hidden block" />
          
        </div>
        <nav className="flex flex-col sm:flex-row items-center  gap-4 text-center text-neutral-500 font-normal sm:font-bold leading-normal tracking-wider pt-10 sm:pt-0">
          <Link to="/">Home</Link>
          <Link className="text-[#252B42] font-medium flex items-center" to="/productlist">
            Shop
            <FontAwesomeIcon icon={faAngleDown} className="pl-3 hidden xl:block" />
          </Link>
          <Link to="/about">About</Link>
          <Link to="/">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Pages</Link>
        </nav>
        <div className=" text-sky-500  font-bold leading-normal tracking-wider flex  xl:flex-row items-center xl:gap-4 gap-5 pt-6 md:pt-0  ">
          <FontAwesomeIcon icon={faUser} />
          <Link to="/login"><span> Login</span></Link>
          <span> /</span>
          <Link to="/signup">
            <span> Register</span>
            
          </Link></div>
          <div className=" text-sky-500  font-bold leading-normal tracking-tight flex flex-col xl:flex-row items-center xl:gap-14 gap-5 pt-6 md:pt-0  ">
          <Link to="/">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
