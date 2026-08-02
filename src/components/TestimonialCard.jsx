function TestimonialCard({ testimonial }) {
  const initials = testimonial.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 hover:border-blue-500 transition duration-300">

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
          {initials}
        </div>

        <div>
          <h3 className="font-semibold text-xl">
            {testimonial.name}
          </h3>

          <p className="text-slate-400">
            {testimonial.company}
          </p>
        </div>

      </div>

      <p className="mt-6 text-slate-300 leading-7">
        "{testimonial.review}"
      </p>

      <div className="mt-6 text-yellow-400 text-xl">
        ★★★★★
      </div>

    </div>
  );
}

export default TestimonialCard;