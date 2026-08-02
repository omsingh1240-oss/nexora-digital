import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
// import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      {/* <Testimonials /> */}
      <ContactCTA />
    </main>
  );
}

export default Home;