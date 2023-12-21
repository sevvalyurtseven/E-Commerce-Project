import blondeGirl from "../../Assets/ABOUT/blondegirl.png";

function Work() {
  return (
    <div className="flex justify-center bg-[#2A7CC7]">
      <div className="flex w-[75%]">
        <div className="flex flex-col justify-center gap-8 sm:pl-40 pl-0 py-20 sm:py-0 items-center sm:items-start text-center sm:text-start">
          <h4 className="text-white text-base font-bold leading-normal tracking-wider">
            WORK WITH US
          </h4>
          <h2 className="text-white text-4xl font-bold leading-[50px] tracking-wider">
            Now Let’s grow Yours
          </h2>
          <p className=" text-white text-sm font-normal leading-tight tracking-wider">
            The gradual accumulation of information about atomic and <br />
            small-scale behavior during the first quarter of the 20th
          </p>
          <div className="flex items-start">
          <button className="text-center text-neutral-50 text-sm font-bold leading-snug tracking-wider border border-solid px-9 py-4">
            Button
          </button>
          </div>
        </div>
      </div>
      
      <img src={blondeGirl} className="hidden sm:block"/>
    </div>
  );
}
export default Work;
