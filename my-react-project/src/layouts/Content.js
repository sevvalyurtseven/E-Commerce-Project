import girl1 from "../Assets/content/contentGirl.png";
import girl2 from "../Assets/content/contentGirl2.png";

function Content() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center items-center flex-wrap gap-4">
        <img src={girl1} />
        <div className="flex">
          <img src={girl2} />
        </div>
        <div className="flex flex-col gap-4 pl-16 pt-36 ">
          <h3 className="text-sky-500 text-base font-bold leading-normal tracking-wider">
            Featured Products
          </h3>
          <h1 className="text-slate-800 text-[40px] font-bold leading-[50px] tracking-wider">
            We love what we do
          </h1>
          <p className=" text-neutral-500 text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: <br />
            Newtonian mechanics.{" "}
          </p>
          <p className=" text-neutral-500 text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: <br />
            Newtonian mechanics
          </p>
        </div>
      </div>
    </div>
  );
}
export default Content;
