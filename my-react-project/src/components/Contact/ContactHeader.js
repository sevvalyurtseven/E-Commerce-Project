import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import family from "../../Assets/CONTACT/contact.png";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import faceebok from "../../Assets/TEAM/logos_facebook.svg";
import linkedin from "../../Assets/TEAM/logos_linkedin-icon.svg";

function ContactHeader() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-col gap-12 sm:gap-8 sm:p-40 p-20 justify-center sm:justify-start items-center sm:items-start">
        <h2 className="text-slate-800 text-base font-bold leading-normal tracking-wider">
          CONTACT US
        </h2>
        <h3 className="text-slate-800 sm:text-6xl text-3xl font-bold sm:leading-[80px] leading-none text-center sm:text-start tracking-wider">
          Get in touch <br className="hidden sm:block" />
          today!
        </h3>
        <p className=" text-neutral-500 text-xl font-normal leading-[30px] tracking-wider text-center sm:text-start">
          We know how large objects will act, <br className="hidden sm:block" />
          but things on a small scale
        </p>
        <p className="text-slate-800 sm:text-2xl text-base font-bold leading-loose tracking-wider">
          Phone ; +451 215 215
        </p>
        <p className="text-slate-800 sm:text-2xl text-base font-bold leading-loose tracking-wider">
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

     <div className="flex justify-center items-center px-16 sm:px-0">
        <img src={family}/>
      </div>
    </div>
  );
}
export default ContactHeader;
