import Clients from "../components/Clients";
import Footer from "../components/Footer";
import HomeSlider from "../components/Home/HomeSlider";
import NavBar from "../components/NavBar";
import ProductCards from "../components/ProductCards";
import Content from "../layouts/Content";
import Features from "../layouts/Features";
import Post from "../layouts/Posts";
import ShopCards from "../layouts/ShopCards";

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
