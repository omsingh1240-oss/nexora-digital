import {
  HiCode,
  HiColorSwatch,
  HiTrendingUp,
  HiSpeakerphone,
  HiArrowRight,
} from "react-icons/hi";

import services from "../data/services";

const icons = {
  "Web Development": <HiCode size={32} />,
  "UI / UX Design": <HiColorSwatch size={32} />,
  "SEO Optimization": <HiTrendingUp size={32} />,
  "Digital Marketing": <HiSpeakerphone size={32} />,
};

function Services() {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-blue-400 font-semibold uppercase">
          Our Services
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Everything You Need To Grow
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl">
          We create modern digital experiences that help businesses
          attract, engage and convert more customers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-slate-900 border border-slate-800 p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                {icons[service.title]}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {service.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {service.description}
              </p>

              <button className="mt-8 flex items-center gap-2 text-blue-400 group-hover:gap-4 transition-all">
                Learn More
                <HiArrowRight />
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;