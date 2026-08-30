import { BookOpenText, UsersRound, CalendarClock } from 'lucide-react';
import WasilMark from './WasilMark';

const HIGHLIGHTS = [
  { icon: UsersRound, label: 'One-to-One Classes' },
  { icon: BookOpenText, label: 'Female Teachers' },
  { icon: CalendarClock, label: 'Flexible Timings' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-900 pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Subtle geometric pattern backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-star-pattern opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-navy-700/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-16 lg:grid-cols-2">
        <div className="max-w-xl animate-fadeUp">
          <span className="eyebrow text-gold-400">
            <WasilMark className="h-3.5 w-3.5" />
            Trusted Online Quran Learning
          </span>

          <h1 className="mt-5 font-display text-4xl leading-[1.1] text-cream-50 sm:text-5xl lg:text-[3.4rem]">
            Learn the Quran.
            <br />
            <span className="text-gold-400">Build Your Faith.</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-navy-100/80 sm:text-lg">
            Learn the Holy Quran from the comfort of your home with qualified, experienced
            and Ijazah-holding female teachers through personalized online classes.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-navy-100">
                <Icon className="h-4 w-4 text-gold-400" strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            
              href="#contact"
              className="rounded-full bg-gold-500 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-navy-900 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:bg-gold-400 hover:shadow-gold-400/30"
            >
              Book Your Free Trial
            </a>
            
              href="#courses"
              className="rounded-full border border-navy-100/25 px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-cream-50 transition-all duration-300 hover:border-navy-100/60 hover:bg-white/5"
            >
              Explore Courses
            </a>
          </div>
        </div>

        {/* Signature visual: a hand-drawn "connection" motif — small stars
            linked by a single drawn line, echoing Wasil ("one who connects")
            as the student's path from letter to fluent recitation. */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
          <div className="relative aspect-square w-full max-w-sm animate-float rounded-[2.5rem] border border-gold-400/20 bg-gradient-to-br from-navy-800 to-navy-700 p-10 shadow-2xl shadow-black/30 sm:max-w-md">
            <svg viewBox="0 0 300 300" className="h-full w-full" aria-hidden="true">
              <path
                d="M40 230 C 90 180, 90 140, 150 150 S 230 90, 260 60"
                fill="none"
                stroke="#c2a05a"
                strokeWidth="1.5"
                strokeDasharray="400"
                strokeDashoffset="400"
                className="animate-drawLine"
              />
              {[
                [40, 230],
                [110, 165],
                [150, 150],
                [205, 108],
                [260, 60],
              ].map(([cx, cy], i) => (
                <g key={i} transform={`translate(${cx}, ${cy})`}>
                  <path
                    d="M0 -9 L2.4 -2.4 L9 0 L2.4 2.4 L0 9 L-2.4 2.4 L-9 0 L-2.4 -2.4 Z"
                    fill={i === 4 ? '#c2a05a' : '#f5efe1'}
                    opacity={i === 0 ? 0.5 : 1}
                  />
                </g>
              ))}
            </svg>
            <p className="absolute bottom-8 left-0 right-0 text-center font-arabic text-xl tracking-wide text-gold-300/80">
              وَصَلَ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
        }
