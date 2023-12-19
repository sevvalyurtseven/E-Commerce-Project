import Clients from "../components/Clients";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductDescription from "../components/Product/ProductDescription";
import ProductHeader from "../components/Product/ProductHeader";

function ProductPage(){
    return (
        <div>
            <NavBar/>
            <ProductHeader/>
            <ProductDescription/>
            <Clients/>
            <Footer/>
            
        </div>
    )
}
export default ProductPage;