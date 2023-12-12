import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCartShopping,
  faEnvelope,
  faHeart,
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
import { Link } from "react-router-dom";

function Header () {
    return (
        <div>
            <div>
                <div className="flex">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>(225) 555-0118</p>
                    </div>
                    <div className="flex">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <p>michelle.rivera@example.com</p>
                    </div>
                    <p>Follow Us and get a chance to win 80% off</p>
                    <div className="flex">
                        <p>Follow Us :</p>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faYoutube}/>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </div>
            </div>
            <div>
        <h1>Bandage</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">
            Shop
            <FontAwesomeIcon icon={faAngleDown} />
          </Link>
          <Link to="/">About</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Pages</Link>
        </nav>
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
            <span>/</span>
            <span>Register</span>
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
    )
}

export default Header;