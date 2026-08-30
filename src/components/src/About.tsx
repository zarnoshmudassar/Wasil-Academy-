import { Check } from 'lucide-react';
import QuranIllustration from './QuranIllustration';

const POINTS = [
  'Correct Quran reading',
  'Tajweed rules and pronunciation',
  'Structured memorization (Hifz)',
  'Essential Islamic knowledge',
  'Confidence and consistency',
  'Good character and manners',
];

export default function About() {
  return (
    <section id="about" className="bg-cream-50 py-24 sm:py-28">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="wasil-divider mb-5 w-40">
            <span className="dot" />
            <span className="line" />
          </div>
          <span className="eyebrow text-gold-600">About Wasil Academy</span>
          <h2 className="section-heading mt-4">A Better Way to Learn the Quran Online</h2>
          <p className="mt-6 text-base leading-relaxed text-navy-600 sm:text-[1.05rem]">
            Wasil Academy provides structured online Quran education built around personalized
            attention and caring, qualified teachers. Every lesson is paced to the student, not the
            other way around — so children, teenagers and adults alike can learn with confidence,
            in a calm and supportive environment.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-navy-700">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-600" strokeWidth={2} />
                {point}
              </li>
            ))}
          </ul>

          
            href="#contact"
            className="mt-10 inline-block rounded-full bg-navy-800 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream-50 transition-all duration-300 hover:bg-navy-700"
          >
            Start Learning Today
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mx-auto max-w-md rounded-[2rem] bg-gradient-to-br from-navy-50 to-cream-200 p-8 sm:p-12">
            <QuranIllustration className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
