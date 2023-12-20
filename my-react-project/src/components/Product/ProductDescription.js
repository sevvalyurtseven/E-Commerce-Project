import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import line from "../../Assets/PRODUCT/Line 1.svg";
import pembeSandalye from "../../Assets/PRODUCT/description.png";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function ProductDescription (){
    return (
        <div className="flex flex-col  py-14 ">

            <ul className="flex  justify-center items-center gap-10 pb-10">

          <li className=" text-neutral-500 text-sm font-bold leading-normal tracking-wider" >Description</li>
          <li className=" text-neutral-500 text-sm font-bold leading-normal tracking-wider">Additional Information</li>
          <li className=" text-neutral-500 text-sm font-bold leading-normal tracking-wider">
            Reviews <span className="text-[#23856D]">(0)</span>
          </li>
        </ul>
        <img src ={line} className="pb-10"/>
        
        <div className="flex justify-center flex-wrap gap-10">
            <div className="flex">
            <img src = {pembeSandalye} />
            </div>
            <div className="flex flex-col gap-8 px-8">
            <h2 className="text-slate-800 text-2xl font-bold leading-loose tracking-wider">the quick fox jumps over </h2>
            
            <p className="text-neutral-500 text-sm font-normal leading-tight tracking-wider">Met minim Mollie non desert Alamo est sit <br/> cliquey dolor do met sent. RELIT official <br/>consequent door ENIM RELIT Mollie. <br/> Excitation venial consequent sent nostrum<br/> met.</p>
            <p className="text-neutral-500 text-sm font-normal leading-tight tracking-wider">Met minim Mollie non desert Alamo est sit <br/> cliquey dolor do met sent. RELIT official <br/>consequent door ENIM RELIT Mollie. <br/> Excitation venial consequent sent nostrum<br/> met.</p>
            <p className="text-neutral-500 text-sm font-normal leading-tight tracking-wider">Met minim Mollie non desert Alamo est sit <br/> cliquey dolor do met sent. RELIT official <br/>consequent door ENIM RELIT Mollie. <br/> Excitation venial consequent sent nostrum<br/> met.</p>
            </div>
            <div className="flex flex-col gap-4 px-10">
            <h2 className="text-slate-800 text-2xl font-bold leading-loose tracking-wider">the quick fox jumps over </h2>
            <div className="flex items-center gap-4">
            <FontAwesomeIcon icon = {faAngleRight}/>
            <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">the quick fox jumps over the lazy dog.</p></div>
            <div className="flex items-center gap-4">
            <FontAwesomeIcon icon = {faAngleRight}/>
            <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">the quick fox jumps over the lazy dog.</p></div>
            <div className="flex items-center gap-4">
            <FontAwesomeIcon icon = {faAngleRight}/>
            <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">the quick fox jumps over the lazy dog.</p></div>
            <div className="flex items-center gap-4">
            <FontAwesomeIcon icon = {faAngleRight}/>
            <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">the quick fox jumps over the lazy dog.</p></div>
            <h2 className="text-slate-800 text-2xl font-bold leading-loose tracking-wider">the quick fox jumps over </h2>
            <div className="flex items-center gap-4">
            <FontAwesomeIcon icon = {faAngleRight}/>
            <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">the quick fox jumps over the lazy dog.</p></div>
            <div className="flex items-center gap-4">
            <FontAwesomeIcon icon = {faAngleRight}/>
            <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">the quick fox jumps over the lazy dog.</p></div>
            <div className="flex items-center gap-4">
            <FontAwesomeIcon icon = {faAngleRight}/>
            <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">the quick fox jumps over the lazy dog.</p></div>
            
            
            </div>

        </div>
        </div>
        
        
    )
}
export default ProductDescription;