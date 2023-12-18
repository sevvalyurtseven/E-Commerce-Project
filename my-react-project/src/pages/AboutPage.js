import HeaderContent from "../components/About/HeaderContent";
import StatsSection from "../components/About/StatsSection";
import Team from "../components/About/Team";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function AboutPage () {
    return (
        <div>
            <NavBar />
            <HeaderContent/>
            <StatsSection/>
            <Team />
            <Clients/>
            <Footer/>
        </div>
    )
}
export default AboutPage;