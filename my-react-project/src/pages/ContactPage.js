import ContactContent from "../components/Contact/ContactContent";
import ContactHeader from "../components/Contact/ContactHeader";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function ContactPage(){
    return (
        <div>
            <NavBar />
            <ContactHeader />
            <ContactContent />
            <Footer />
        </div>
    )
}
export default ContactPage;