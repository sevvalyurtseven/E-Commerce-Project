import hooli from "../../Assets/brands/col-md-2.png";
import lyft from "../../Assets/brands/Vector.png";
import yaprak from "../../Assets/brands/col-md-2-1.png";
import stripe from "../../Assets/brands/col-md-2-2.png";
import aws from "../../Assets/brands/col-md-2-3.png";
import robot from "../../Assets/brands/col-md-2-4.png";

function Companies() {
  return (
    <div className="flex justify-center py-24 bg-[#FAFAFA]">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-slate-800 text-4xl font-bold leading-tight tracking-wider">
          Big Companies Are Here
        </h2>
        <p className="text-center text-neutral-500 text-sm font-normal leading-tight tracking-wider">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex items-center py-10 gap-10">
          <img src={hooli} />
          <img src={lyft} />
          <img src={yaprak} />
          <img src={stripe} />
          <img src={aws} />
          <img src={robot} />
        </div>
      </div>
    </div>
  );
}
export default Companies;
