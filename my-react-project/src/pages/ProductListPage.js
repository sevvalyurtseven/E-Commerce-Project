import Clients from "../components/Clients";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Shop from "../layouts/Shop";

function ProductListPage() {
    return (
      <div>
      <NavBar />
      <Shop />
       <Clients />
        <Footer />
      </div>
    );
  }
  export default ProductListPage;