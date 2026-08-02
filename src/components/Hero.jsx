function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white pt-40 pb-28">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Floating Cards */}
        <div className="hidden lg:flex flex-col gap-6 absolute top-0 right-6">

          <div className="w-56 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-2xl">
            <p className="text-sm text-slate-300">
              Revenue Growth
            </p>

            <h3 className="mt-2 text-4xl font-bold text-white">
              +180%
            </h3>

            <p className="mt-2 text-sm text-green-400">
              ↑ This Year
            </p>
          </div>

          <div className="w-56 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-2xl">
            <p className="text-sm text-slate-300">
              Active Clients
            </p>

            <h3 className="mt-2 text-4xl font-bold text-white">
              120+
            </h3>

            <p className="mt-2 text-sm text-blue-400">
              Worldwide
            </p>
          </div>

        </div>

        {/* Badge */}

        <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
          🚀 Trusted by 500+ Businesses
        </span>

        {/* Heading */}

        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight lg:text-7xl">
          Build Digital Products

          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            That People Love.
          </span>
        </h1>

        {/* Description */}

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          We help startups and businesses grow through branding,
          web development, UI/UX design and digital marketing.
          Our team creates experiences that convert visitors into
          loyal customers.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <button className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-semibold backdrop-blur-md transition hover:bg-white/20">
            View Portfolio
          </button>

        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">

          <div>
            <h2 className="text-4xl font-bold text-blue-400">
              250+
            </h2>

            <p className="mt-2 text-slate-400">
              Projects
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-400">
              120+
            </h2>

            <p className="mt-2 text-slate-400">
              Clients
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-400">
              8+
            </h2>

            <p className="mt-2 text-slate-400">
              Years
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-blue-400">
              4.9★
            </h2>

            <p className="mt-2 text-slate-400">
              Client Rating
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;