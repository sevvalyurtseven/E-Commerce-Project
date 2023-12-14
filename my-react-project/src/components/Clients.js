import hooli from "../Assets/brands/col-md-2.png";
import lyft from "../Assets/brands/Vector.png";
import yaprak from "../Assets/brands/col-md-2-1.png";
import stripe from "../Assets/brands/col-md-2-2.png";
import aws from "../Assets/brands/col-md-2-3.png";
import robot from "../Assets/brands/col-md-2-4.png";



function Clients () {
    return(
        <div className="flex justify-center items-center gap-[2rem] ml-[6rem] mr-[11rem] py-[4rem] pl-[1rem]">
            <img src={hooli}/>
            <img src={lyft}/>
            <img src={yaprak}/>
            <img src={stripe}/>
            <img src={aws}/>
            <img src={robot}/>
        </div>
    )
}

export default Clients;