import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import team1 from "../../Assets/TEAM/team3.png";
import team2 from "../../Assets/TEAM/team2.png";
import team3 from "../../Assets/TEAM/team5.png";
import team4 from "../../Assets/TEAM/team1.png";
import team5 from "../../Assets/TEAM/team4.png";
import member1 from "../../Assets/TEAM/member1.jpg";
import member2 from "../../Assets/TEAM/member2.jpg";
import member3 from "../../Assets/TEAM/member3.jpg";
import member4 from "../../Assets/TEAM/member4.jpg";
import member5 from "../../Assets/TEAM/member5.jpg";
import member6 from "../../Assets/TEAM/member6.jpg";
import member7 from "../../Assets/TEAM/member7.jpg";
import member8 from "../../Assets/TEAM/member8.jpg";
import member9 from "../../Assets/TEAM/member9.jpg";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import faceebok from "../../Assets/TEAM/logos_facebook.svg";
import linkedin from "../../Assets/TEAM/logos_linkedin-icon.svg"


function Team() {
    const memberCards = [member1, member2, member3, member4, member5, member6, member7, member8, member9];
  return (
    <div className="flex flex-col py-20 gap-6">
      <h5 className="text-center text-neutral-500 text-base font-bold leading-normal tracking-wider">
        WHAT WE DO
      </h5>
      <h2 className="text-center text-slate-800 text-6xl font-bold leading-[80px] tracking-wider">
        Innovation tailored for you
      </h2>
      <div className="flex items-center justify-center gap-4">
        <h5 className="text-center text-slate-800 text-sm font-bold leading-normal tracking-wider">
          Home
        </h5>
        <FontAwesomeIcon
          className="text-[#BDBDBD] text-2xl tracking-wider"
          icon={faAngleRight}
        />
        <h5 className="text-center text-neutral-500 text-sm font-bold leading-normal tracking-wider">
          Team
        </h5>
      </div>
      <div className="flex gap-2 pt-10">
        <img src={team1} />

        <div className="flex flex-col gap-2">
          <img src={team2} />
          <img src={team3} />
        </div>
        <div className="flex flex-col gap-2">
          <img src={team4} />
          <img src={team5} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-20">
        <h1 className="text-slate-800 text-5xl font-bold leading-[50px] tracking-wider">Meet Our Team</h1>
      <div className="flex justify-center flex-wrap gap-8 p-20">
        {memberCards.map((image, index) => (
          <div key={index} className="flex flex-col items-center gap-6">
            <img src={image} alt={`card ${index}`} />
            <div className="flex flex-col gap-3">
              <h3 className="text-center text-slate-800 text-base font-bold  leading-normal tracking-wider">
                Username
              </h3>
              <h4 className="text-center text-neutral-500 text-sm font-bold  leading-normal tracking-wider">
                Profession
              </h4>
              <div className="flex items-center gap-5 text-[#23A6F0] text-lg pb-28">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
      <h1 className=" text-slate-800 text-[40px] font-bold leading-[50px] tracking-wider">Start your 14 days free trial</h1>
      <p className="text-center text-neutral-500 text-sm font-normal leading-tight tracking-wider">Met minim Mollie non desert Alamo est sit cliquey dolor <br/> 
do met sent. RELIT official consequent.</p>
<button className="text-center text-white text-sm font-bold leading-snug tracking-wider border rounded-md border-solid bg-[#23A6F0] px-12 py-5">Try it free now</button></div>
<div className="flex items-center justify-center gap-10 pt-10">
<FontAwesomeIcon icon={faTwitter} className="text-4xl text-[#23A6F0] " />
<img src={faceebok} />
<FontAwesomeIcon icon= {faInstagram} className="text-4xl" />
<img src={linkedin} /></div>


    </div>
  );
}
export default Team;


