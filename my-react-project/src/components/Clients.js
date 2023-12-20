import hooli from "../Assets/brands/col-md-2.png";
import lyft from "../Assets/brands/Vector.png";
import yaprak from "../Assets/brands/col-md-2-1.png";
import stripe from "../Assets/brands/col-md-2-2.png";
import aws from "../Assets/brands/col-md-2-3.png";
import robot from "../Assets/brands/col-md-2-4.png";



function Clients () {
    const clients =[hooli, lyft, yaprak, stripe, aws, robot];
    return(
        <div className="sm:py-12 sm:px-44 flex flex-col sm:flex-row sm:justify-between items-center gap-12 pt-16">
            {clients.map((image, index) => (
                <div key = {index}> 
                <img src = {image} />
                </div>
            ))}
        </div>
    )
}

export default Clients;