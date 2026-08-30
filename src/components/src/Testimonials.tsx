import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  { quote: 'Placeholder testimonial — replace this with a real parent review.', name: 'Parent of a Student' },
  { quote: 'Placeholder testimonial — replace this with a real parent review.', name: 'Parent of a Student' },
  { quote: 'Placeholder testimonial — replace this with a real parent review.', name: 'Parent of a Student' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-gold-600">Testimonials</span>
          <h2 className="section-heading mt-4">What Parents Say About Wasil Academy</h2>
          <p className="mt-4 text-sm text-navy-400">
            The reviews below are placeholders and will be replaced with real parent feedback.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-dashed border-navy-200 bg-cream-50 p-7"
            >
              <Quote className="h-6 w-6 text-gold-500/70" strokeWidth={1.5} />
              <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-navy-600">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-navy-800">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
