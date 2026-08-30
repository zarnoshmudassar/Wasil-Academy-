import { ArrowRight } from 'lucide-react';
import WasilMark from './WasilMark';

const FACTORS = ['Age', 'Current Quran level', 'Learning speed', 'Goals', 'Individual needs'];
const PROGRESSION = ['Learn', 'Practice', 'Improve', 'Progress'];

export default function TeachingApproach() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-gold-600">Our Approach</span>
          <h2 className="section-heading mt-4">Personalized Learning. Meaningful Progress.</h2>
          <p className="mt-4 text-base leading-relaxed text-navy-500">
            Every student learns differently. Lessons are shaped around each student's{' '}
            {FACTORS.join(', ')}.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row">
          {PROGRESSION.map((stage, i) => (
            <div key={stage} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-navy-100 bg-cream-50 px-8 py-6 shadow-sm">
                <WasilMark className="h-5 w-5 text-gold-500" />
                <span className="font-display text-lg text-navy-800">{stage}</span>
              </div>
              {i < PROGRESSION.length - 1 && (
                <ArrowRight className="hidden h-5 w-5 flex-shrink-0 text-navy-300 sm:block" strokeWidth={1.5} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
