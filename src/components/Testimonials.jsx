import testimonials from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold">Testimonials</h2>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;