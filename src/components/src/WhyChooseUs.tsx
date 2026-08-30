import {
  GraduationCap,
  UserRound,
  Sparkles,
  CalendarClock,
  LineChart,
  ShieldCheck,
} from 'lucide-react';

const BENEFITS = [
  {
    icon: GraduationCap,
    title: 'Female Ijazah-Holding Teachers',
    description: 'Learn from qualified and experienced female Quran teachers.',
  },
  {
    icon: UserRound,
    title: 'One-to-One Attention',
    description: "Lessons are personalized according to each student's level and needs.",
  },
  {
    icon: Sparkles,
    title: 'Child-Friendly Learning',
    description: 'Engaging teaching methods designed to keep young learners interested.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Class Timings',
    description: 'Convenient schedules for students in different countries and time zones.',
  },
  {
    icon: LineChart,
    title: 'Regular Progress Updates',
    description: "Parents can stay informed about their child's learning and progress.",
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Comfortable Learning',
    description: 'A respectful online environment where students can learn comfortably from home.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-navy-900 py-24 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-gold-400">Why Choose Us</span>
          <h2 className="section-heading mt-4 text-cream-50">Why Families Choose Wasil Academy</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-navy-700/60 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-4 bg-navy-900 p-8 transition-colors duration-300 hover:bg-navy-800">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-gold-400">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="font-display text-lg text-cream-50">{title}</h3>
              <p className="text-sm leading-relaxed text-navy-200">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
                          }
