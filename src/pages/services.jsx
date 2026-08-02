import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

function Services() {
  return (
    <main className="bg-slate-950 text-white">

      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            Our Services
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            Digital Solutions
            <span className="block text-blue-400">
              That Drive Results
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-400 leading-8">
            We help businesses grow through modern web development,
            UI/UX design, branding, SEO, and digital marketing.
          </p>

        </div>
      </section>

      <ContactCTA />
      <Footer />

    </main>
  );
}

export default Services;