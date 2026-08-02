import companies from "../data/companies";

function TrustedCompanies() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-slate-400 uppercase tracking-widest">
          Trusted by innovative companies
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {companies.map((company) => (
            <div
              key={company}
              className="rounded-xl border border-slate-700 bg-slate-800 py-5 text-center font-semibold text-slate-300 transition hover:border-blue-500 hover:text-white"
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrustedCompanies;