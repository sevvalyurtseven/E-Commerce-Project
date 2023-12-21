import Clients from "../Clients";

function Companies() {
  return (
    <div className="flex justify-center items-center py-24 bg-[#FAFAFA]">
      <div className="flex flex-col items-center  gap-8">
        <h2 className="text-slate-800 text-4xl font-bold leading-tight tracking-wider text-center">
          Big Companies Are Here
        </h2>
        <p className="text-center text-neutral-500 text-sm font-normal leading-tight tracking-wider">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
        <Clients/>
      </div>
    </div>
  );
}
export default Companies;
