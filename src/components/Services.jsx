import services from "../data/services";
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

      {/* Services Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-blue-400 uppercase tracking-widest font-semibold">
              What We Offer
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Our Core Services
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-2xl">
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-slate-400 leading-7">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-slate-300">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-8 text-blue-400 font-semibold hover:text-blue-300">
                    Learn More →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-blue-400 uppercase tracking-widest font-semibold">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Why Businesses Choose Nexora
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-slate-400">
              We combine creativity, technology, and strategy to deliver
              solutions that help businesses grow.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-400">5+</h3>
              <p className="mt-3 text-slate-300">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-400">120+</h3>
              <p className="mt-3 text-slate-300">
                Projects Delivered
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-400">60+</h3>
              <p className="mt-3 text-slate-300">
                Happy Clients
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-400">24/7</h3>
              <p className="mt-3 text-slate-300">
                Support
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}

export default Services;