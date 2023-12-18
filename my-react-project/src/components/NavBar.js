import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
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

function NavBar () {
    return (
        <div className="font-bold">
            <div className="bg-[#252B42] text-white font-bold flex justify-between items-center py-4 px-6">
                <div className="flex gap-[2rem]">
                    <div className="flex gap-[0.4rem] items-center">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>(225) 555-0118</p>
                    </div>
                    <div className="flex gap-[0.4rem] items-center">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <p>michelle.rivera@example.com</p>
                    </div>
                    </div>
                    <p>Follow Us and get a chance to win 80% off</p>
                    <div className="flex gap-4 items-center">
                        <p>Follow Us :</p>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faYoutube}/>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </div>
            </div>
            <div className="flex justify-between items-center py-6 px-8">
        <h1 className="text-2xl">Bandage</h1>
        <div className="flex justify-between w-[80%]">
        <nav className="text-[#737373] flex gap-[1.5rem]">
          <Link to="/">Home</Link>
          <Link className="text-[#252B42] font-medium" to="/productlist">
            Shop
            <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: '0.6rem' }}/>
          </Link>
          <Link to="/about">About</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Pages</Link>
        </nav>
        <div className="text-[#23A6F0] flex gap-[1.7rem]">
          <Link to="/">
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.2rem' }} />
            <span> Login</span>
            <span> /</span>
            <span> Register</span>
          </Link>
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
        </div>
    )
}

export default NavBar;