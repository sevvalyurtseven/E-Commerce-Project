import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="py-10">
      <div className="bg-[#FAFAFA]">
        <div className="w-[70%] m-auto py-20 flex justify-between">
          <h1 className="text-2xl font-bold tracking-wider">Bandage</h1>
          <div className="text-[#23A6F0] text-2xl flex gap-5">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
      <div className="w-[70%] m-auto py-12 flex justify-between">
        <div className="font-bold flex flex-col text-[#252B42] gap-5">
          <div className="flex">
            <div>
              <h5 className=" tracking-wider">Company Info</h5>
              <nav className="flex flex-col gap-3 text-[#737373] tracking-wider mt-6 text-sm">
                <Link to="">About Us</Link>
                <Link to="">Carrier</Link>
                <Link to="">We are hiring</Link>
                <Link to="">Blog</Link>
              </nav>
            </div>
            <div className="ml-10">
              <h5 className="tracking-wider">Legal</h5>
              <nav className="flex flex-col gap-3 text-[#737373]  tracking-wider mt-6 text-sm">
                <Link to="">About Us</Link>
                <Link to="">Carrier</Link>
                <Link to="">We are hiring</Link>
                <Link to="">Blog</Link>
              </nav>
            </div>
            <div className="ml-12">
              <h5 className="tracking-wider">Features</h5>
              <nav className="flex flex-col gap-3 text-[#737373] tracking-wider mt-6 text-sm">
                <Link to="">Business Marketing</Link>
                <Link to="">User Analytic</Link>
                <Link to="">Live Chat</Link>
                <Link to="">Unlimited Support</Link>
              </nav>
            </div>
            <div className="ml-12">
              <h5 className="tracking-wider">Resources</h5>
              <nav className="flex flex-col gap-3 text-[#737373] tracking-wider mt-6 text-sm">
                <Link to="">IOS & Android</Link>
                <Link to="">Watch a Demo</Link>
                <Link to="">Customers</Link>
                <Link to="">API</Link>
              </nav>
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-bold text-xl mb-6">Get In Touch</h5>
          <div className="border rounded-[5px]">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-white text-sm px-3 py-2"
            />
            <button
              type="submit"
              className="text-sm text-white bg-[#23A6F0] py-4 px-4 "
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs tracking-wider text-[#737373]">Lore imp sum dolor Amit</p>
        </div>
      </div>
      <div className="py-6 bg-[#FAFAFA]">
        <div className="w-[70%] m-auto text-sm font-bold text-[#737373] tracking-wider">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
