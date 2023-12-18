import Companies from "../components/About/Companies";
import HeaderContent from "../components/About/HeaderContent";
import StatsSection from "../components/About/StatsSection";
import Team from "../components/About/Team";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <HeaderContent />
      <StatsSection />
      <Team />
      <Companies />
      <Footer />
    </div>
  );
}
export default AboutPage;
