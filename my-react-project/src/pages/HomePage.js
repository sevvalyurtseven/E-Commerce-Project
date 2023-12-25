import Clients from "../components/Clients";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Content from "../components/Home/Content";
import Features from "../components/Home/Features";
import Post from "../layouts/Posts";
import ShopCards from "../components/Home/ShopCards";
import BestSellerSection from "../components/Home/BestSellerSection";
import Swiper from "../components/Home/Swiper";

function HomePage() {
  return (
    <div>
      <NavBar />
      < Swiper />
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
