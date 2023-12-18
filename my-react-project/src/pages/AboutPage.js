import HeaderContent from "../components/About/HeaderContent";
import StatsSection from "../components/About/StatsSection";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

function AboutPage () {
    return (
        <div>
            <HeaderContent/>
            <StatsSection/>
            <Clients/>
            <Footer/>
        </div>
    )
}
export default AboutPage;