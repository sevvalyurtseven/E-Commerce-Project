import curlyGirl from "../Assets/none.png";

function Header() {
  return (
    <div className="py-12 relative overflow-hidden">
      <div className="border-solid rounded-[1.5rem] h-[38.7rem] ml-10 mr-[6rem] object-cover  bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] relative">
        <div className="flex items-center relative">
          <div className="flex flex-col text-left gap-[2rem] mt-[5rem] ml-[7rem]">
            <h5 className="font-bold text-[#2A7CC7]">SUMMER 2020</h5>
            <h2 className="font-bold text-6xl">NEW COLLECTION</h2>
            <div className="text-xl text-[#737373]">
              <p>We know how large objects will act,</p>
              <p>but things on a small scale.</p>
            </div>
            <button className="font-bold text-xl bg-[#23A6F0] text-white rounded-[0.3rem] px-3 py-3 w-[12rem]">
              SHOP NOW
            </button>
          </div>

          <div className="flex shrink-0 absolute bottom-[-15.7rem] right-[-4rem] ">
            <img src={curlyGirl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
