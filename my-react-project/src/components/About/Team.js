import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import team1 from "../../Assets/ABOUT/team-1-user-1.jpg";
import team2 from "../../Assets/ABOUT/team-1-user-2.jpg";
import team3 from "../../Assets/ABOUT/team-1-user-3.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Team() {
  const teamCards = [team1, team2, team3];
  return (
    <div>
      <div className=" flex justify-center py-24 ">
        <div className="flex flex-col items-center gap-8">
          <div className="text-slate-800 text-4xl font-bold leading-[50px] tracking-wider">
            <Link to="/team">Meet Our Team</Link>
          </div>

          <p className="w-3/5 sm:w-full text-center text-neutral-500 text-sm font-normal leading-tight tracking-wider">
            Problems trying to resolve the conflict between <br className="hidden sm:block" /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="flex justify-center sm:gap-8 flex-wrap sm:flex-nowrap">
        {teamCards.map((image, index) => (
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
  );
}
export default Team;
