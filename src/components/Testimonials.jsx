import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-400">
            Trusted by businesses worldwide for creating modern digital experiences.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((client) => (
            <div
              key={client.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

              <div className="flex text-yellow-400 text-xl">
                ★★★★★
              </div>

              <p className="mt-6 text-slate-300 leading-8">
                "{client.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {client.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {client.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {client.company}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;