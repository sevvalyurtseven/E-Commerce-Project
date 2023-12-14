import Clients from "../components/Clients";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductCards from "../components/ProductCards";
import Content from "../layouts/Content";
import Features from "../layouts/Features";
import Header from "../layouts/Header";
import Post from "../layouts/Posts";
import ShopCards from "../layouts/ShopCards";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Header />
      <Clients />
      <ShopCards />
      <ProductCards />
      <Content />
      <Features />
      <Post />
      <Footer />
    </div>
  );
}
export default HomePage;
