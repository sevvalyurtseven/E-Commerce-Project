import girl1 from "../Assets/content/contentGirl.png";
import girl2 from "../Assets/content/contentGirl2.png";

function Content () {
    return (
        <div className="flex py-[4rem] pl-[11rem]">
            <div className="flex gap-[1rem]">
                <img src={girl1}/>
                <img src={girl2}/>
            </div>
            <div className="w-[70rem] flex-col justify-start items-start gap-4 pl-[15rem] inline-flex mt-[6rem]">
                <h5 className="text-base leading-normal tracking-wider font-bold text-[#23A6F0] mb-[0.5rem]">Featured Products</h5>
                <h2 className="text-[3rem] leading-[50px] tracking-wider font-bold text-[#252B42] mb-[1rem]">We love what we do</h2>
                
                <div className="w-[55%] text-sm text-[#737373] font-normal tracking-wider flex flex-col gap-[2rem]">
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
            </div>
        </div>
    )
}
export default Content;