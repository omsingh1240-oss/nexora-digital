import features from "../data/features";

function WhyChooseUs() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-blue-400 font-semibold uppercase">
          Why Choose Us
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-bold">
          We Don't Just Build Websites.
        </h2>

        <p className="mt-5 max-w-2xl text-slate-400">
          We create digital experiences that help businesses grow,
          attract customers, and build trust.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;