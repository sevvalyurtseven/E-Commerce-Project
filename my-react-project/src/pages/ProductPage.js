import Clients from "../components/Clients";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductHeader from "../components/Product/ProductHeader";

function ProductPage(){
    return (
        <div>
            <NavBar/>
            <ProductHeader/>
            <Clients/>
            <Footer/>
            
        </div>
    )
}
export default ProductPage;