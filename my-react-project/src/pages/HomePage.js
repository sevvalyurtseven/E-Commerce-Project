import Clients from "../components/Clients";
import Footer from "../components/Footer";
import HomeSlider from "../components/Home/HomeSlider";
import NavBar from "../components/NavBar";
import Content from "../components/Home/Content";
import Features from "../components/Home/Features";
import Post from "../layouts/Posts";
import ShopCards from "../components/Home/ShopCards";
import BestSellerSection from "../components/Home/BestSellerSection";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HomeSlider />
      <Clients />
      <ShopCards />
      <BestSellerSection />
      <Content />
      <Features />
      <Post />
      <Footer />
    </div>
  );
}
export default HomePage;
