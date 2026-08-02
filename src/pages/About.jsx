import team from "../data/team";
import process from "../data/process";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
function About() {
  return (
    <main className="bg-slate-950 text-white">
      {/* Hero */}
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            About Us
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            We Build Digital
            <span className="block text-blue-400">
              Experiences That Grow Brands
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-400 leading-8">
            Nexora Digital is a creative marketing agency helping businesses
            build powerful brands through modern design, development, and
            digital marketing.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-blue-400 uppercase tracking-widest font-semibold">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              From Ideas to Impact
            </h2>

            <p className="mt-6 text-slate-400 leading-8">
              Nexora Digital was founded with one mission: helping businesses
              build a strong online presence through modern design, innovative
              technology, and result-driven digital marketing.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              We combine creativity, strategy, and technology to create
              websites and marketing campaigns that not only look beautiful but
              also deliver measurable business growth.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-5xl font-bold text-blue-400">120+</h3>
                <p className="mt-2 text-slate-400">Projects Delivered</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-blue-400">60+</h3>
                <p className="mt-2 text-slate-400">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-blue-400">5+</h3>
                <p className="mt-2 text-slate-400">Years Experience</p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-blue-400">98%</h3>
                <p className="mt-2 text-slate-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold text-white">
                Our Mission
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                To help businesses grow through modern websites, creative
                branding, digital marketing, and innovative technology that
                delivers measurable results.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold text-white">
                Our Vision
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                To become a globally trusted digital agency known for building
                impactful brands, meaningful customer experiences, and
                long-term business success.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
<section className="pb-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">
      <p className="text-blue-400 uppercase tracking-widest font-semibold">
        Our Team
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        Meet The Experts
      </h2>

      <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
        A passionate team of designers, developers, and marketers dedicated to helping brands grow.
      </p>
    </div>

    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {team.map((member) => (
        <div
          key={member.id}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center hover:border-blue-500 transition"
        >

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold">
            {member.name.charAt(0)}
          </div>

          <h3 className="mt-6 text-xl font-semibold">
            {member.name}
          </h3>

          <p className="mt-2 text-slate-400">
            {member.role}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>
{/* Process */}
<section className="pb-24">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">
      <p className="text-blue-400 uppercase tracking-widest font-semibold">
        Our Process
      </p>

      <h2 className="mt-4 text-4xl font-bold">
        How We Work
      </h2>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {process.map((step) => (
        <div
          key={step.id}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition"
        >
          <span className="text-5xl font-bold text-blue-400">
            {step.id}
          </span>

          <h3 className="mt-6 text-2xl font-semibold">
            {step.title}
          </h3>

          <p className="mt-4 text-slate-400 leading-7">
            {step.description}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

<ContactCTA />
<Footer />
    </main>
  );
}

export default About;