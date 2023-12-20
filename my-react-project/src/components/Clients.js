import hooli from "../Assets/brands/col-md-2.png";
import lyft from "../Assets/brands/Vector.png";
import yaprak from "../Assets/brands/col-md-2-1.png";
import stripe from "../Assets/brands/col-md-2-2.png";
import aws from "../Assets/brands/col-md-2-3.png";
import robot from "../Assets/brands/col-md-2-4.png";



function Clients () {
    const clients =[hooli, lyft, yaprak, stripe, aws, robot];
    return(
        <div className="flex flex-col sm:flex-row justify-center items-center py-20  gap-12">
            {clients.map((image, index) => (
                <div kay = {index} > 
                <img src = {image} />
                </div>
            ))}
        </div>
    )
}

export default Clients;