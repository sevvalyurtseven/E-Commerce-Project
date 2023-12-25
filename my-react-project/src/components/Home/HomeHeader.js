import curlyGirl from "../../Assets/none.png";

function HomeHeader() {
  return (
    <div className="sm:py-10 sm:pl-12 sm:pr-28 py-10 px-12 ">
      <div className="flex flex-col lg:flex-row bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] rounded-3xl pt-4 lg:justify-between">
        <div className="flex flex-col p-8 gap-5 items-center sm:items-start sm:justify-center sm:pl-20 sm:gap-8 lg:max-w-[50%]">
        <h5 className="text-sky-600 text-base font-bold leading-normal tracking-wider">SUMMER 2020</h5>
        
        <h2 className="text-center sm:text-start text-slate-800 sm:text-4xl xl:text-5xl text-2xl font-bold  leading-8 tracking-wider sm:whitespace-nowrap">NEW COLLECTION</h2>
        <p className="text-center text-neutral-500 sm:text-xl text-normal font-normal  sm:leading-[30px] leading-5 tracking-wider">We know how large objects will act, <br/>but things on a small scale.</p>
        <button className="font-bold sm:text-xl text-normal bg-[#23A6F0] text-white sm:py-4 sm:px-12 py-2 px-4 border border-solid rounded-md">
          SHOP NOW
        </button>
      </div>
      <img
          className="flex object-cover lg:max-w-[50%]"
          src={curlyGirl}/>
      </div>
        
      </div>
  );
}

export default HomeHeader;
