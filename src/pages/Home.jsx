import Hero from "../components/Hero";
import TrustedCompanies from "../components/TrustedCompanies";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Hero />
      <TrustedCompanies />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <ContactCTA />
       <Footer />
    </main>
  );
}

export default Home;