import Clients from "../components/Clients";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductPageCard from "../components/ProductPageCard";
import Shop from "../layouts/Shop";

function ProductListPage() {
    return (
      <div>
      <NavBar />
      <Shop />
      <ProductPageCard />
       <Clients />
        <Footer />
      </div>
    );
  }
  export default ProductListPage;