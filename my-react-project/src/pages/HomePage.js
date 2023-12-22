import Clients from "../components/Clients";
import Footer from "../components/Footer";
import HomeSlider from "../components/Home/HomeSlider";
import NavBar from "../components/NavBar";
import ProductCards from "../components/ProductCards";
import Content from "../components/Home/Content";
import Features from "../components/Home/Features";
import Post from "../layouts/Posts";
import ShopCards from "../components/Home/ShopCards";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HomeSlider />
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
