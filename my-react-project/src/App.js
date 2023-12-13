import "./App.css";
import NavBar from "./layouts/NavBar";
import Header from "./layouts/Header";
import Clients from "./layouts/Clients";
import ShopCards from "./layouts/ShopCards";
import ProductCards from "./layouts/ProductCards";
import Content from "./layouts/Content";

function App() {
  return (
    <div className="text-[#252B42]">
        
          <NavBar />
          <Header />
          <Clients />
          <ShopCards />
          <ProductCards />
          <Content />
        
      
    </div>
  );
}

export default App;
