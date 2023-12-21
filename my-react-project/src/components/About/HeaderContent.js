import girl from "../../Assets/ABOUT/aboutbanner.png";

function HeaderContent() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap sm:justify-start justify-center sm:items-start items-center  sm:gap-44 gap-10">
        <div className="flex flex-col sm:items-start items-center gap-10 py-44">
          <h3 className="text-slate-800 text-base font-bold leading-normal tracking-wider hidden sm:block">
            ABOUT COMPANY
          </h3>
          <h1 className=" text-slate-800 text-5xl font-bold leading-20 tracking-wider">
            ABOUT US
          </h1>
          <p className="text-neutral-500 text-2xl font-normal leading-7 tracking-wider text-center sm:text-start sm:w-full w-4/5">
            We know how large objects will act, <br className="hidden sm:block"/>
            but things on a small scale
          </p>

          <div className="sm:px-7 px-10 py-3 bg-[#23A6F0] rounded-5 flex-col items-center gap-3 border-0 border-solid rounded">
            <button className="text-white text-sm font-bold leading-snug tracking-tight">
              Get Quote Now
            </button>
          </div>
        </div>
        <div className="flex  h-full ">
          <img src={girl} className="flex object-cover" />
        </div>
      </div>

      <div className="pt-[7rem] gap-8 flex flex-col sm:justify-start justify-center sm:items-start items-center">
        <h5 className="text-red-500 text-sm font-normal leading-tight tracking-wider">
          Problems trying
        </h5>
        <div className="flex flex-wrap sm:flex-nowrap sm:justify-between justify-center  gap-[6rem] sm:w-full w-4/5">
          <h2 className="text-slate-800 text-2xl font-bold leading-7 tracking-tight sm:text-start text-center">
            Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do{" "}
            <br /> met sent.
          </h2>

          <h5 className="text-neutral-500 text-sm font-normal leading-tight tracking-wider">
            Problems trying to resolve the conflict between the two major realms
            of <br /> Classical physics: Newtonian mechanics
          </h5>
        </div>
      </div>
    </div>
  );
}
export default HeaderContent;
