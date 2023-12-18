import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import family from "../../Assets/CONTACT/contact.png";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import faceebok from "../../Assets/TEAM/logos_facebook.svg";
import linkedin from "../../Assets/TEAM/logos_linkedin-icon.svg";

function ContactHeader() {
  return (
    <div className="flex">
      <div className="flex flex-col gap-8 p-40">
        <h2 className="text-slate-800 text-base font-bold leading-normal tracking-wider">
          CONTACT US
        </h2>
        <h3 className="text-slate-800 text-6xl font-bold leading-[80px] tracking-widert">
          Get in touch <br />
          today!
        </h3>
        <p className=" text-neutral-500 text-xl font-normal leading-[30px] tracking-wider">
          We know how large objects will act, <br />
          but things on a small scale
        </p>
        <p className="text-slate-800 text-2xl font-bold leading-loose tracking-wider">
          Phone ; +451 215 215
        </p>
        <p className="text-slate-800 text-2xl font-bold leading-loose tracking-wider">
          Fax : +451 215 215
        </p>
        <div className="flex gap-11">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-3xl text-[#23A6F0] "
          />
          <img src={faceebok} />
          <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
          <img src={linkedin} />
        </div>
      </div>

      <div className="flex justify-end ">
        <img src={family} />
      </div>
    </div>
  );
}
export default ContactHeader;
