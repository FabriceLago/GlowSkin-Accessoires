import { testimonials } from '../../config/images';
import { useScrollFadeUp } from '../../hooks/useScrollFadeUp';

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <div ref={ref} className={className}>
      <div className="rounded-card bg-ivoire p-8 shadow-diffuse">
        <p className="text-sm leading-body text-brun/80">
          « {testimonial.quote} »
        </p>
        <div className="mt-6 flex items-center gap-3">
          <img
            loading="lazy"
            src={testimonial.photo}
            alt={testimonial.name}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-brun">{testimonial.name}</p>
            <p className="text-xs text-brun/50">{testimonial.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { ref, className } = useScrollFadeUp<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div ref={ref} className={className}>
        <h2 className="font-heading text-3xl font-light tracking-title text-brun">
          Ce qu’elles en disent
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
