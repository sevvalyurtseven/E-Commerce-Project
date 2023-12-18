import telefon from "../../Assets/CONTACT/telefon.svg";
import mektup from "../../Assets/CONTACT/mektup.svg";
import navigasyon from "../../Assets/CONTACT/navigasyon.svg";
import ok from "../../Assets/CONTACT/ok.svg";

function ContactContent() {
  const contactCards = [telefon, navigasyon, mektup];
  return (
    <div className="flex flex-col justify-center items-center py-20 gap-6">
      <h4 className=" text-slate-800 text-sm font-bold leading-normal tracking-wider">
        VISIT OUR OFFICE
      </h4>
      <h2 className="text-center text-slate-800 text-[40px] font-bold leading-[50px] tracking-wider">
        We help small businesses <br />
        with big ideas
      </h2>
      <div className="flex gap-20 pt-32">
        {contactCards.map((image, index) => (
          <div key={index} className={`flex flex-col items-center gap-8 py-14 ${
            index === 1 ? "bg-[#252B42]" : ""
          }`}>
            <img src={image} alt={`card ${index}`} />
            <div className="flex flex-col gap-4">
              <p className={` text-center text-sm font-bold leading-normal tracking-wider ${
            index === 1 ? "text-white" : "text-slate-800"
          }`}>
              georgia.young@example.com
              </p>
              <p className={` text-center text-sm font-bold leading-normal tracking-wider ${
            index === 1 ? "text-white" : "text-slate-800"
          }`}>
              georgia.young@ple.com
              </p>
              <h4 className={`text-center text-base font-bold  leading-normal tracking-wider ${
            index === 1 ? "text-white" : "text-slate-800"
          }`}>Get Support</h4>
              
              <div className="px-12 ">
                <button className="border-[#23A6F0] border-2 rounded-full text-[#23A6F0] text-sm font-bold leading-normal tracking-wider px-8 py-3">Submit Request</button>
              
            </div>
          </div></div>
        ))}
        
      </div>
      <div className="pt-10 flex flex-col items-center justify-center gap-6">
      <img src = {ok} />
      <h4 className=" text-slate-800 text-base font-bold leading-normal tracking-wider">WE Can't WAIT TO MEET YOU</h4>
      <h2 className=" text-slate-800 text-6xl font-bold leading-[80px] tracking-wider">Let’s Talk</h2>
      <div className="border border-solid bg-sky-500 px-10 py-4 rounded-md">
      <button className="text-center text-white text-sm font-bold leading-snug tracking-wider">Try it free now</button>
</div></div>
      </div>
  );
}
export default ContactContent;
